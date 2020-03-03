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
    const scanParams = {
      TableName: config.dynamoClient.tableName, // give it your table name
      Select: "ALL_ATTRIBUTES",
    }

    const dbData = await dynamodb.scan(scanParams).promise()

    if (!dbData || !dbData.Items) {
      throw Error("dbScan: dbData or dbData.Items is null")
    }

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(dbData.Items),
    })
  } catch (err) {
    console.log(err)
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify("Unable to retrieve event detail from db"),
    })
  }
}
