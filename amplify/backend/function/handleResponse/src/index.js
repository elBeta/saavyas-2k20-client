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
const nodemailer = require("nodemailer")

AWS.config.update({ region: process.env.REGION })

const dynamodb = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.STORAGE_PAYMENTSDB_NAME
const eventsInfoTableName = process.env.STORAGE_EVENTSINFODB_NAME

const secretsClient = new AWS.SecretsManager({ region: process.env.REGION })
const secretName = "dev/saavyas/payu-test"

const payLater = true

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
    // salt|status||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key;
    const data = event["queryStringParameters"]

    if (!payLater) {
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
    }

    const formData = JSON.parse(data["formData"])

    const getItemParams = {
      TableName: eventsInfoTableName,
      Key: {
        eventID: data["productinfo"],
      },
    }

    // Get required form fields
    const eventsInfoDbData = await dynamodb.get(getItemParams).promise()
    if (!eventsInfoDbData || !eventsInfoDbData.Item) {
      throw Error("Unable to retreive required form fields from database")
    }
    const requiredFormFields = eventsInfoDbData.Item.formFields
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

    if (payLater) {
      // Generate Transaction ID
      data["txnid"] =
        "txn" + Date.now().toString() + zfill(RandInt(0, 999999), 6)
      console.log("Transaction ID: " + data["txnid"])

      // Get event amount
      data["amount"] = parseFloat(eventsInfoDbData.Item.amount)
      console.log(
        "Successfully retrieved event amount from database: " +
          data["amount"].toString()
      )
    }

    //=========================
    // Mailer code
    //=========================
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USERID,
        pass: process.env.MAILER_PASS,
      },
    })

    const mailBody =
      `Registration Id: ${data["txnid"]}\n` +
      `Event Name: ${formData["Event"]}\n` +
      (payLater
        ? `Amount to be paid: ${data["amount"]}\n` +
          "Payment link will be mailed to you shortly upon the activation of the payment portal.\n" +
          "Kindly complete the payment."
        : `Amount paid: ${data["amount"]}\n`) +
      "\n\n\nThank You\n" +
      "Team Saavyas'20\n"

    const mailOptions = {
      from: process.env.MAILER_USERID,
      to: formData["Email Id"],
      subject: `Saavyas '20 Registration Successful for ${formData["Event"]}`,
      text: mailBody,
    }

    let mailSent = false
    try {
      const info = await transporter.sendMail(mailOptions)
      console.log(`Mail sent to ${formData["Email Id"]}`)
      console.log(info)
      mailSent = true
    } catch (e) {
      console.log(`Unable to send mail to ${formData["Email Id"]}`)
      console.log(e)
      mailSent = false
    }

    //=========================

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
              ![
                "txnid",
                "eventID",
                "amount",
                "Registered At",
                "paid",
                "mailSent",
              ].includes(key) && requiredFormFields.includes(key)
          )
          .map(key => ({ [key]: formData[key] }))
      ),
      paid: true,
      mailSent: mailSent,
    }
    if (payLater) {
      entryItem.paid = false
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
      body: JSON.stringify({
        status: "Successful",
        txnid: data["txnid"],
      }),
    })
  } catch (err) {
    console.error(err)
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        status: "Error",
        txnid: data["txnid"] || "",
      }),
    })
  }
}
