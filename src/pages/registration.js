import React from "react"
import { Helmet } from "react-helmet"

function RegistrationPage() {
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
