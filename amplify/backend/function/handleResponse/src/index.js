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
      console.log(data)
      throw Error(
        "Missing critical component(s) required to generate response hashing sequence"
      )
    }

    // Retrieve salt
    const secret = await secretsClient
      .getSecretValue({ SecretId: secretName })
      .promise()
    if (
      !secret ||
      !secret.SecretString ||
      !JSON.parse(secret.SecretString).merchantSalt
    ) {
      throw Error("Unable to retrieve merchant salt from database")
    }
    const salt = JSON.parse(secret.SecretString).merchantSalt
    console.log("Merchant Salt retreived")

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

    // Verify response hash
    if (data["hash"] !== hash) {
      console.log(`Request hash: ${hash}`)
      console.log(`Provided hash: ${data["hash"]}`)
      throw Error("Request hash doesn't match one provided.")
    }

    const formData = JSON.parse(data["formData"])

    const getItemParams = {
      TableName: eventsInfoTableName,
      Key: {
        eventID: data["productinfo"],
      },
    }

    // Get required form fields
    const reqffDBData = await dynamodb.get(getItemParams).promise()
    if (!reqffDBData || !reqffDBData.Item) {
      throw Error("Unable to retreive required form fields from database")
    }
    const requiredFormFields = reqffDBData.Item.formFields
    console.log("Fetched required form fields from db")
    console.log("Required form fields:")
    console.log(requiredFormFields)

    // Check if all required form fields provided
    // in the request data is present or not
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

    // Create entry to be put in db
    const entryItem = {
      txnid: data["txnid"],
      eventID: data["productinfo"],
      amount: parseFloat(data["amount"]),
      "Registered At": Date.now(),
      ...Object.assign(
        ...Object.keys(formData)
          .filter(
            key =>
              !["txnid", "eventID", "amount", "Registered At"].includes(key) &&
              requiredFormFields.includes(key)
          )
          .map(key => ({ [key]: formData[key] }))
      ),
    }
    console.log(`Entry item:\n ${entryItem}`)

    const putItemParams = {
      TableName: tableName,
      Item: entryItem,
    }

    // Insert entry into database
    const dbResponse = await dynamodb.put(putItemParams).promise()
    console.log("Successfully inserted record into database")
    console.log(dbResponse)

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(
        `Transaction Successful.\nTransaction ID: ${data["txnid"]}`
      ),
    })
  } catch (err) {
    console.error(err)
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
