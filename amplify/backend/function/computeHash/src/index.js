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

const secretsClient = new AWS.SecretsManager({ region: process.env.REGION })
const secretName = "dev/saavyas/payu-test"

function zfill(number, length) {
  // Prefix number with zeroes till it hits desired length
  number = number.toString()
  if (number.length < length) {
    number = "0".repeat(length - number.length) + number
  }
  return number
}

function RandInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

exports.handler = async (event, context, callback) => {
  try {
    // hashSequence =
    // key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||salt;
    let data = event["queryStringParameters"]

    // Get important data from given string
    const isImpDataMissing = "productinfo|firstname|email"
      .split("|")
      .map(item => [undefined, null].includes(data[item]))
      .includes(true)

    // Check if important data is missing
    if (isImpDataMissing) {
      console.log(data)
      throw Error("Unable to compute request hash. Required data is missing")
    }

    const getItemParams = {
      TableName: tableName,
      Key: {
        eventID: data["productinfo"],
      },
    }

    // Retrieve Event Amount
    const dbData = await dynamodb.get(getItemParams).promise()
    if (!dbData || !dbData.Item) {
      throw Error("Unable to retrieve event amount from database")
    }
    data["amount"] = parseFloat(dbData.Item.amount)
    console.log(
      "Successfully retrieved event amount from database: " +
        data["amount"].toString()
    )

    // Retrieve Salt and Key
    const secret = await secretsClient
      .getSecretValue({ SecretId: secretName })
      .promise()
    if (!secret || !secret.SecretString) {
      throw Error("Unable to retrieve merchant salt and key")
    }
    const { merchantSalt, merchantKey } = JSON.parse(secret.SecretString)
    data["key"] = merchantKey
    console.log(merchantSalt == null ? "Salt not retrieved" : "Salt retreived")
    console.log(merchantKey == null ? "Key not retrieved" : "Key retreived")

    // Generate Transaction ID
    data["txnid"] = "txn" + Date.now().toString() + zfill(RandInt(0, 999999), 6)
    console.log("Transaction ID: " + data["txnid"])

    // Generate hashing sequence
    const hashingSequence =
      "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5"
        .split("|")
        .map(item => (data[item] ? data[item] : ""))
        .filter(item => item !== undefined)
        .join("|") +
      "||||||" +
      merchantSalt

    // Compute request hash
    const hash = crypto
      .createHash("sha512")
      .update(hashingSequence)
      .digest("hex")

    console.log("response: " + hash)

    // Return request hash and event amount
    console.log("Returning request hash and event amount")
    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        hash: hash,
        amount: data["amount"],
        txnid: data["txnid"],
        key: data["key"],
      }),
    })
  } catch (err) {
    console.error(err)
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(`Error: ${err.message}`),
    })
  }
}
