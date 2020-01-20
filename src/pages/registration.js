import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import Amplify, { API } from "aws-amplify"

import awsconfig from "../aws-exports"

function RegistrationPage() {
  useEffect(() => {
    const apiName = "requestHashAPI"
    const path = "/request-hash"
    const coreQueryParams = {
      key: "T5g199Dn",
      txnid: "tid9875",
      productinfo: "event-voic",
      firstname: "Piyush",
      email: "piyush.kotian@gmail.com",
    }
    const init = {
      queryStringParameters: coreQueryParams,
    }
    Amplify.configure(awsconfig)
    API.get(apiName, path, init)
      .then(response => {
        console.log(response)
        return response
      })
      .then(response => {
        console.log(response)
        window.bolt.launch(
          {
            ...coreQueryParams,
            phone: "7338500594",
            surl: "localhost:8000/registration",
            furl: "localhost:8000/registration",
            hash: response["hash"],
            amount: response["amount"],
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
