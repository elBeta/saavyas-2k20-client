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
        key: "T5g199Dn",
        txnid: "tid1234",
        amount: 17,
        productinfo: "TestProduct",
        firstname: "Piyush",
        email: "piyush.kotian@gmail.com",
      },
    }
    Amplify.configure(awsconfig)
    API.get(apiName, path, init)
      .then(response => {
        console.log(response)
        return response
      })
      .then(resp => {
        console.log(resp)
        window.bolt.launch(
          {
            key: "T5g199Dn",
            txnid: "tid1234",
            amount: 17,
            productinfo: "TestProduct",
            firstname: "Piyush",
            email: "piyush.kotian@gmail.com",
            phone: "7338500594",
            surl: "localhost:8000/registration",
            furl: "localhost:8000/registration",
            hash: resp,
          },
          {
            resonseHandler: BOLT => {
              console.log(BOLT.response.txnStatus)
            },
            catchException: function(BOLT) {
              alert(BOLT.message)
            },
          }
        )
      })
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
