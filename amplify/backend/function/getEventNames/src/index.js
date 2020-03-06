/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storageEventsInfoDBName = process.env.STORAGE_EVENTSINFODB_NAME
var storageEventsInfoDBArn = process.env.STORAGE_EVENTSINFODB_ARN

Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk")
AWS.config.update({ region: process.env.REGION })

const dynamodb = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.STORAGE_EVENTSINFODB_NAME

exports.handler = async (event, context, callback) => {
  try {
    const scanParams = {
      TableName: tableName,
      ProjectionExpression: "eventID, eventName",
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
      body: JSON.stringify("Unable to retrieve event IDs and Names from db"),
    })
  }
}
