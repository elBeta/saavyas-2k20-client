var crypto = require("crypto")

exports.handler = async event => {
  // hashSequence =
  // key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||salt;

  // Get important data from given string
  const isImpDataMissing = "key|txnid|amount|productinfo|firstname|email"
    .split("|")
    .map(item => [undefined, null].includes(event[item]))
    .includes(true)

  // Check if important data is missing
  if (isImpDataMissing) {
    console.log("Important data is missing")
    return {
      statusCode: 400,
      body: JSON.stringify(
        "Error: Missing critical component(s) required to generate hashing sequence"
      ),
    }
  }

  // One blank must be left even if no UDF is supplied
  // Therefore, check if udf is empty
  const isUdfEmpty = ![1, 2, 3, 4, 5]
    .map(item => [undefined, null].includes(event["udf" + item.toString()]))
    .includes(false)

  // Replace one udf with blank (required as per Docs)
  if (isUdfEmpty) {
    event["udf1"] = ""
  }

  // Generate hashing sequence
  const salt = "QZpaSP4aQk"
  let hashingSequence =
    "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5"
      .split("|")
      .map(item => event[item])
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
    body: {
      hash: hash,
    },
  }
  return response
}
