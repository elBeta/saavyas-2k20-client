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
    const data = event["queryStringParameters"]

    if (data["txnid"] == null) {
      throw Error("Transaction id not supplied")
    }

    const updateParams = {
      TableName: tableName,
      Key: {
        txnid: data["txnid"],
      },
      UpdateExpression: "set paid = :p",
      ExpressionAttributeValues: {
        ":p": true,
      },
    }

    await dynamodb.update(updateParams).promise()

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify("Spot Registration Successful"),
    })
  } catch (err) {
    console.log(err)
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify("Spot Registration Failed"),
    })
  }
}
