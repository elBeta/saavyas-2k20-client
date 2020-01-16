import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import Amplify, { API } from "aws-amplify"

import awsconfig from "../aws-exports"

function RegistrationPage() {
  useEffect(() => {
    const apiName = "requestHashAPI"
    const path = "/request-hash"
    const init = {
      queryStringParameters: {
        key: "abc",
        txnid: "xyz",
        amount: "123",
        productinfo: "best",
        firstname: "jay",
        email: "nomail",
        hash: "shash",
      },
    }
    Amplify.configure(awsconfig)
    API.get(apiName, path, init)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <script
          id="bolt"
          src="https://sboxcheckout-static.citruspay.com/bolt/run/bolt.min.js"
          bolt-
          color="<color-code>"
          bolt-logo="<image path>"
        ></script>
      </Helmet>
      <div></div>
    </>
  )
}

export default RegistrationPage
