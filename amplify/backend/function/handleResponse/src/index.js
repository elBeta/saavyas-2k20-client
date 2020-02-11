/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storagePaymentsDBName = process.env.STORAGE_PAYMENTSDB_NAME
var storagePaymentsDBArn = process.env.STORAGE_PAYMENTSDB_ARN
var storageEventsInfoDBName = process.env.STORAGE_EVENTSINFODB_NAME
var storageEventsInfoDBArn = process.env.STORAGE_EVENTSINFODB_ARN

Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk")
const crypto = require("crypto")

AWS.config.update({ region: process.env.REGION })

const dynamodb = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.STORAGE_PAYMENTSDB_NAME
const eventsInfoTableName = process.env.STORAGE_EVENTSINFODB_NAME

const secretsClient = new AWS.SecretsManager({ region: process.env.REGION })
const secretName = "dev/saavyas/payu-test"

exports.handler = async (event, context, callback) => {
  try {
    // hashSequence =
    // salt|status||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key;
    const data = event["queryStringParameters"]

    // Get important data from given string
    const isImpDataMissing = "status|email|firstname|productinfo|amount|txnid|key|hash"
      .split("|")
      .map(item => [undefined, null].includes(data[item]))
      .includes(true)

    // Check if important data is missing
    if (isImpDataMissing) {
      console.log("Important data is missing")
      console.log(event)
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(
          "Error: Missing critical component(s) required to generate hashing sequence"
        ),
      }
    }

    // Retrieve salt
    const salt = JSON.parse(
      (await secretsClient.getSecretValue({ SecretId: secretName }).promise())
        .SecretString
    ).merchantSalt
    console.log(salt == null ? "Salt not retrieved" : "Salt retreived")

    // Generate hashing sequence
    let hashingSequence =
      salt +
      "|" +
      data["status"] +
      "||||||" +
      "udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key"
        .split("|")
        .map(item => (data[item] ? data[item] : ""))
        .filter(item => item !== undefined)
        .join("|")

    // Compute response hash
    const hash = crypto
      .createHash("sha512")
      .update(hashingSequence)
      .digest("hex")
    console.log("responseHash: " + hash)

    if (data["hash"] !== hash) {
      console.log("Error: Request hash doesn't match one provided.")
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify("Error: Request hash doesn't match one provided."),
      }
    }

    const formData = JSON.parse(data["formData"])

    const getItemParams = {
      TableName: eventsInfoTableName,
      Key: {
        eventID: data["productinfo"],
      },
    }

    const requiredFormFields = (await dynamodb.get(getItemParams).promise())
      .Item.formFields

    console.log("requiredFormFields:")
    console.log(requiredFormFields)

    let requiredFormFieldsPresent = true
    for (let field of requiredFormFields) {
      requiredFormFieldsPresent &=
        formData[field] != null ||
        (typeof formData[field] === "string" && formData[field] != "")
    }

    console.log(`Required Form Fields Present: ${requiredFormFieldsPresent}`)

    if (!requiredFormFieldsPresent) {
      throw Error(
        "Error: Form Data required for the specified event is incomplete."
      )
    }

    const putItemParams = {
      TableName: tableName,
      Item: {
        txnid: data["txnid"],
        eventID: data["productinfo"],
        amount: parseFloat(data["amount"]),
        "Registered At": Date.now(),
        ...Object.assign(
          ...Object.keys(formData)
            .filter(
              key =>
                !["txnid", "eventID", "amount", "Registered At"].includes(
                  key
                ) && requiredFormFields.includes(key)
            )
            .map(key => ({ [key]: formData[key] }))
        ),
      },
    }

    const dbResponse = await dynamodb.put(putItemParams).promise()
    console.log("Successfully inserted record into database")
    console.log(dbResponse)

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify("Successfully inserted record into database"),
    }
  } catch (err) {
    console.log("Error!")
    console.log(err)
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(
        "Error: Failed to retrieve event amount from database"
      ),
    })
  }
}
