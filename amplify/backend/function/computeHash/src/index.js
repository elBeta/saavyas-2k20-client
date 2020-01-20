/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storageEventsInfoDBName = process.env.STORAGE_EVENTSINFODB_NAME
var storageEventsInfoDBArn = process.env.STORAGE_EVENTSINFODB_ARN

Amplify Params - DO NOT EDIT */

const crypto = require("crypto")
const AWS = require("aws-sdk")

AWS.config.update({ region: process.env.REGION })

const dynamodb = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.STORAGE_EVENTSINFODB_NAME

exports.handler = async (event, context, callback) => {
  // hashSequence =
  // key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||salt;
  let data = event["queryStringParameters"]

  // Get important data from given string
  const isImpDataMissing = "key|txnid|productinfo|firstname|email"
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
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify(
        "Error: Missing critical component(s) required to generate hashing sequence"
      ),
    }
  }
  console.log("middle")
  const getItemParams = {
    TableName: tableName,
    Key: {
      eventID: data["productinfo"],
    },
  }

  try {
    let dbData = await dynamodb.get(getItemParams).promise()
    console.log(dbData)
    data["amount"] = parseFloat(dbData.Item.amount)
    console.log(
      "Successfully retrieved event amount from database: " +
        data["amount"].toString()
    )

    // Generate hashing sequence
    const salt = "QZpaSP4aQk"
    let hashingSequence =
      "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5"
        .split("|")
        .map(item => (data[item] ? data[item] : ""))
        .filter(item => item !== undefined)
        .join("|") +
      "||||||" +
      salt

    // Compute request hash
    const hash = crypto
      .createHash("sha512")
      .update(hashingSequence)
      .digest("hex")

    console.log("response: " + hash)

    // Return request hash and event amount
    console.log("Returning request hash and event amount")
    console.log(data["amount"])
    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify({ hash: hash, amount: data["amount"] }),
    })
  } catch (err) {
    console.log("Error: Failed to retrieve event amount from database")
    console.log(err)
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify(
        "Error: Failed to retrieve event amount from database"
      ),
    })
  }
}
