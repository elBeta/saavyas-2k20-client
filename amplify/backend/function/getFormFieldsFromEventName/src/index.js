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
    const data = event["queryStringParameters"]

    if (data["eventID"] == null) {
      throw Error("Error: eventID not supplied.")
    }

    const getItemParams = {
      TableName: tableName,
      Key: {
        eventID: data["eventID"],
      },
    }

    const dbData = (await dynamodb.get(getItemParams).promise()).Item
    const formFields = dbData.formFields
    const eventName = dbData.eventName
    const amount = parseFloat(dbData.amount)

    if (formFields == null) {
      throw Error("Error: formFields is null or undefined")
    }

    if (eventName == null) {
      throw Error("Error: eventName is null or undefined")
    }

    if (amount == null || isNaN(amount)) {
      throw Error("Error: amount invalid or absent")
    }

    console.log(formFields)
    console.log(`Event Name: ${eventName}`)

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        formFields: formFields,
        eventName: eventName,
        amount: amount,
      }),
    })
  } catch (err) {
    console.log("Error!")
    console.log(err.message)
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(`Error: ${err.message}`),
    })
  }
}
