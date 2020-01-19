const AWS = require("aws-sdk")

AWS.config.update({ region: process.env.TABLE_REGION })

const dynamodb = new AWS.DynamoDB.DocumentClient()
const tableName = "paymentsDB"

exports.handler = (event, context) => {
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
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify(
        "Error: Missing critical component(s) required to generate hashing sequence"
      ),
    }
  }

  // Generate hashing sequence
  const salt = "QZpaSP4aQk"
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
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify(
        "Error: Request hash doesn't match one provided. Possible MITM attack."
      ),
    }
  }

  const putItemParams = {
    TableName: tableName,
    Item: {
      txnid: data["txnid"],
      firstname: data["firstname"],
      phone: data["phone"],
      eventID: data["productinfo"],
      amount: parseFloat(data["amount"]),
    },
  }

  dynamodb.put(putItemParams, (err, data) => {
    if (err) {
      console.log("Error: Couldn't record transaction in database")
      console.log(err)
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify("Error: Couldn't record transaction in database"),
      }
    }
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    }
  })

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify(hash),
  }
  return response
}
