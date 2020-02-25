import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"

import DoneIcon from "@material-ui/icons/Done"
import FailIcon from "@material-ui/icons/Close"

import { Helmet } from "react-helmet"
import Amplify, { API } from "aws-amplify"
import { navigate } from "gatsby"
import qs from "querystring"

import awsconfig from "../aws-exports"

import Loader from "../components/Loader"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    background: "#333645",
    padding: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  rootGrid: {
    [theme.breakpoints.up("md")]: {
      flexDirection: "row-reverse",
    },
  },
  header: {
    paddingBottom: "1rem",
  },
  titleHolder: {
    paddingBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      padding: "6rem 4rem",
      borderLeft: "8px solid #fafafa",
    },
  },
  titleTypo: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "white",
    [theme.breakpoints.up("sm")]: {
      fontSize: "5rem",
    },
    // textTransform: "uppercase",
  },
  titleUnderline: {
    background: "#fafafa",
    width: "3rem",
    height: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  formHolder: {
    padding: "1rem 0",
  },
  fieldHolder: {
    padding: "0.5rem 0",
  },
  fieldLabelTypo: {
    fontFamily: "Barlow",
    fontWeight: 600,
    color: "#fafafa",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.4rem",
    },
  },
  fieldInputHolder: {},
  fieldInput: {
    background: "#424556",
    fontFamily: "Barlow",
    fontWeight: 600,
    color: "#fafafa",
    padding: 4,
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  actionPanel: {},
  actionBtn: {
    background: "#424556",
    padding: "0.75rem 1rem",

    "&:hover": {
      background: "#424556",
    },
  },
  actionBtnTypo: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "#fafafa",
  },
  txnStatusIconHolder: {
    display: "flex",
    justifyContent: "center",
    padding: "7rem 0",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 0",
    },
  },
  txnStatusIcon: {
    fontSize: "15rem",
    fill: "#fafafa",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10rem",
    },
  },
}))

function RegistrationForm(props) {
  const classes = useStyles()
  const { location } = props
  const [formFields, setFormFields] = useState([])
  const [formData, setFormData] = useState({})
  const [txnStatus, setTxnStatus] = useState({
    performed: false,
    success: false,
    txnid: "",
  })
  const eventID = location.state.eventID

  // Get Form Fields from eventId
  useEffect(() => {
    if (txnStatus.performed) {
      return
    }

    const fieldFetchAPIName = "eventFormFieldsFetchAPI"
    const fieldFetchAPIPath = "/get-form-fields"
    const fieldFetchQParams = {
      queryStringParameters: {
        eventID: eventID,
      },
    }

    Amplify.configure(awsconfig)

    API.get(fieldFetchAPIName, fieldFetchAPIPath, fieldFetchQParams)
      .then(response => {
        console.log(response)

        // Append Event and Amount to list of Form Fields
        const formFieldsArr = ["Event", "Amount"].concat(response.formFields)
        setFormFields(formFieldsArr)

        // Covert response.formFields into object
        // with key=formFields[i] and value=""
        const formDataObj = response.formFields.reduce(
          (accumulator, currentValue) => {
            accumulator[currentValue] = ""
            return accumulator
          },
          {}
        )

        // Create entry for Event and Amount using
        // response data (containing eventName and amount)
        formDataObj["Event"] = response.eventName
        formDataObj["Amount"] = response.amount
        console.log(formDataObj)

        // Set Form Data
        setFormData(formDataObj)
      })
      .catch(err => {
        console.log(err)
      })
  }, [eventID, txnStatus.performed])

  const handleInputChange = e => {
    setFormData(
      Object.assign({}, formData, {
        [e.target.id]: e.target.value,
      })
    )
  }

  const handleRegisterClick = e => {
    // Check if any form field is empty.
    const emptyFormFields = []
    for (let field in formData) {
      if (
        ["", null, undefined].includes(
          typeof formData[field] === "string"
            ? formData[field].trim()
            : formData[field]
        )
      ) {
        emptyFormFields.push(field)
      }
    }

    // Inform the user if any form field is empty.
    if (emptyFormFields.length !== 0) {
      alert(
        "Error!\n\n" +
          "The following Mandatory Fields are not filled:\n" +
          emptyFormFields.join("\n")
      )
      return
    }

    const coreQueryParams = {
      productinfo: eventID,
      firstname: (formData["Participant Name"] || formData["Team Name"]).split(
        " "
      )[0],
      email: formData["Email Id"],
    }
    const init = {
      queryStringParameters: coreQueryParams,
    }

    console.log(coreQueryParams)

    // =================================================================
    // Payment Part
    // =================================================================
    // API.get("requestHashAPI", "/request-hash", init)
    //   .then(response => {
    //     console.log(response)
    //     return response
    //   })
    //   .then(response => {
    //     window.bolt.launch(
    //       {
    //         ...coreQueryParams,
    //         phone: formData["Phone Number"],
    //         surl: location.href,
    //         furl: location.href,
    //         hash: response["hash"],
    //         amount: response["amount"],
    //         txnid: response["txnid"],
    //         key: response["key"],
    //       },
    //       {
    //         responseHandler: BOLT => {
    //           console.log(BOLT.response.txnStatus)
    //           API.get("txnResponseAPI", "/response", {
    //             queryStringParameters: {
    //               key: BOLT.response.key,
    //               txnid: BOLT.response.txnid,
    //               amount: BOLT.response.amount,
    //               productinfo: BOLT.response.productinfo,
    //               firstname: BOLT.response.firstname,
    //               email: BOLT.response.email,
    //               phone: BOLT.response.phone,
    //               hash: BOLT.response.hash,
    //               status: BOLT.response.status,
    //               formData: JSON.stringify(formData),
    //             },
    //           })
    //             .then(response => {
    //               console.log(response)
    //               setTxnStatus({
    //                 performed: true,
    //                 success: true,
    //                 txnid: BOLT.response.txnid,
    //               })
    //             })
    //             .catch(err => {
    //               console.log(err)
    //               setTxnStatus({
    //                 performed: true,
    //                 success: false,
    //                 txnid: BOLT.response.txnid,
    //               })
    //             })
    //         },
    //         catchException: BOLT => {
    //           console.log(BOLT.message)
    //         },
    //       }
    //     )
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     setTxnStatus({ performed: true, success: false, txnid: "" })
    //   })
    // =================================================================

    // =================================================================
    // Pay later part (comment out once salt and key recieved)
    // =================================================================
    API.get("txnResponseAPI", "/response", {
      queryStringParameters: {
        ...coreQueryParams,
        formData: JSON.stringify(formData),
      },
    })
      .then(response => {
        console.log(response)
        setTxnStatus({
          performed: true,
          success: true,
          txnid: response.txnid,
        })
      })
      .catch(err => {
        console.log(err)
        setTxnStatus({
          performed: true,
          success: false,
          txnid: "",
        })
      })
    // =================================================================
  }

  const handleCancelClick = e => {
    navigate("/")
  }

  // If loading, render loader
  const isLoading = !formFields.length && !txnStatus.performed
  if (isLoading) {
    return (
      <>
        <CssBaseline />
        <Loader size="5rem" bgColor="#333645" iconColor="white" />
      </>
    )
  }

  if (txnStatus.performed) {
    return (
      <TransactionStatus
        txnSuccess={txnStatus.success}
        txnid={txnStatus.txnid}
        classes={classes}
      />
    )
  }

  return (
    <>
      <CssBaseline />
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
      <div className={classes.root}>
        <Grid container alignItems="center" className={classes.rootGrid}>
          <Grid container item xs={12} md={5} lg={6} className={classes.header}>
            <Grid container item xs={12} className={classes.titleHolder}>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.titleTypo}>
                  Event
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" className={classes.titleTypo}>
                  Registration
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.titleUnderline} />
          </Grid>
          <Grid container item xs={12} md={7} lg={6}>
            <Grid container item xs={12} className={classes.formHolder}>
              {formFields.map(field => (
                <Grid
                  container
                  item
                  xs={12}
                  sm={6}
                  className={classes.fieldHolder}
                  key={field}
                >
                  <Grid item xs={12}>
                    <Typography variant="h6" className={classes.fieldLabelTypo}>
                      {field + ":"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.fieldInputHolder}>
                    <Input
                      disableUnderline
                      fullWidth
                      readOnly={["Event", "Amount"].includes(field)}
                      id={field}
                      value={formData[field] || ""}
                      onChange={handleInputChange}
                      className={classes.fieldInput}
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid container item xs={12} className={classes.actionPanel}>
              <Grid item xs={6}>
                <Button
                  className={classes.actionBtn}
                  onClick={handleCancelClick}
                >
                  <Typography variant="h6" className={classes.actionBtnTypo}>
                    Cancel
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  className={classes.actionBtn}
                  onClick={handleRegisterClick}
                >
                  <Typography variant="h6" className={classes.actionBtnTypo}>
                    Register
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

function TransactionStatus(props) {
  const { txnSuccess, txnid, classes } = props

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="center"
              className={classes.titleTypo}
              // style={{ overflowWrap: "anywhere" }}
            >
              Registration {txnSuccess ? "Successful" : "Failed"}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.txnStatusIconHolder}>
            {txnSuccess ? (
              <DoneIcon className={classes.txnStatusIcon} />
            ) : (
              <FailIcon className={classes.txnStatusIcon} />
            )}
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              align="center"
              className={classes.fieldLabelTypo}
              style={{ overflowWrap: "anywhere" }}
            >
              Registration Id: {txnid}
            </Typography>
          </Grid>
          {txnSuccess && (
            <Grid item xs={12}>
              <Typography
                variant="h6"
                align="center"
                className={classes.fieldLabelTypo}
              >
                The registration id and event name has beent sent to your email.
                Thank you for registering.
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>
    </>
  )
}

export default RegistrationForm
