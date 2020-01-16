var crypto = require("crypto")

exports.handler = async event => {
  // hashSequence =
  // key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||salt;
  let data = event["queryStringParameters"]

  // Get important data from given string
  const isImpDataMissing = "key|txnid|amount|productinfo|firstname|email"
    .split("|")
    .map(item => [undefined, null].includes(data[item]))
    .includes(true)

  // Check if important data is missing
  if (isImpDataMissing) {
    console.log("Important data is missing")
    console.log(event)
    console.log(data, data["key"], data["txnid"], data["amount"])
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

  // One blank must be left even if no UDF is supplied
  // Therefore, check if udf is empty
  const isUdfEmpty = ![1, 2, 3, 4, 5]
    .map(item => [undefined, null].includes(data["udf" + item.toString()]))
    .includes(false)

  // Replace one udf with blank (required as per Docs)
  if (isUdfEmpty) {
    data["udf1"] = ""
  }

  // Generate hashing sequence
  const salt = "QZpaSP4aQk"
  let hashingSequence =
    "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5"
      .split("|")
      .map(item => data[item])
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
