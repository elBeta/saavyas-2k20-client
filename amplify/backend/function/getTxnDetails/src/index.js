/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storagePaymentsDBName = process.env.STORAGE_PAYMENTSDB_NAME
var storagePaymentsDBArn = process.env.STORAGE_PAYMENTSDB_ARN

Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk")
AWS.config.update({ region: process.env.REGION })

const dynamodb = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.STORAGE_PAYMENTSDB_NAME

exports.handler = async (event, context, callback) => {
  try {
    const { txnid } = event["queryStringParameters"]
    console.log(`Transaction Id: ${txnid}`)

    if (!txnid || txnid.trim().length === 0) {
      throw Error("Transaction Id not supplied")
    }

    const getItemParams = {
      TableName: tableName,
      Key: {
        txnid: txnid,
      },
    }

    const dbResponse = await dynamodb.get(getItemParams).promise()

    if (!dbResponse || !dbResponse.Item) {
      throw Error("Unable to retrieve registration details from database")
    }
    console.log("Successfully retrieved registration Details:")
    console.log(dbResponse.Item)

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(dbResponse.Item),
    })
  } catch (err) {
    console.error(err)
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify("Invalid Transaction Id."),
    })
  }
}
