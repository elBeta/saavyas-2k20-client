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
        txnid: "tid9876",
        amount: 47,
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
            txnid: "tid9876",
            amount: 47,
            productinfo: "TestProduct",
            firstname: "Piyush",
            email: "piyush.kotian@gmail.com",
            phone: "7338500594",
            surl: "localhost:8000/registration",
            furl: "localhost:8000/registration",
            hash: resp,
          },
          {
            responseHandler: BOLT => {
              alert(BOLT.response.txnStatus)
              API.get("txnResponseAPI", "/response", {
                queryStringParameters: {
                  key: BOLT.response.key,
                  txnid: BOLT.response.txnid,
                  amount: BOLT.response.amount,
                  productinfo: BOLT.response.productinfo,
                  firstname: BOLT.response.firstname,
                  email: BOLT.response.email,
                  phone: BOLT.response.phone,
                  hash: BOLT.response.hash,
                  status: BOLT.response.status,
                },
              })
                .then(response => console.log(response))
                .catch(err => console.log(err))
            },
            catchException: BOLT => {
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
