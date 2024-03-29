import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

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
  titleHolder: {
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
  payLaterNote: {
    paddingTop: "1rem",
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
      fontSize: "8rem",
    },
  },
  verticalPad: {
    padding: "2rem 0",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0",
    },
  },
}))

function RegistrationForm(props) {
  const classes = useStyles()
  const { location } = props
  const [eventID, setEventID] = useState("drone-prix")
  const [eventsInfo, setEventsInfo] = useState([])
  const [formFields, setFormFields] = useState([])
  const [formData, setFormData] = useState({})
  const [txnStatus, setTxnStatus] = useState({
    performed: false,
    success: false,
    txnid: "",
  })
  const [isLoading, setIsLoading] = useState(true)

  // Check if it is hostel accomodation
  const isForHostel = eventID === "hostel-accomodation"

  // Get all event names
  useEffect(() => {
    setIsLoading(true)
    Amplify.configure(awsconfig)
    API.get("eventNamesFetchAPI", "/fetch-event-names")
      .then(evntsInfo => {
        console.log(evntsInfo)
        setEventsInfo(Array.prototype.concat([], evntsInfo))
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  // Get Form Fields from eventId
  useEffect(() => {
    if (txnStatus.performed) {
      return
    }

    setIsLoading(true)
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
      .finally(() => setIsLoading(false))
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

    setIsLoading(true)
    const coreQueryParams = {
      productinfo: eventID,
      firstname: (formData["Participant Name"] || formData["Team Name"]).split(
        " "
      )[0],
      email: formData["Email Id"],
    }
    console.log(coreQueryParams)

    // =================================================================
    // Pay later part (comment out once salt and key recieved)
    // =================================================================
    API.get("txnResponseAPI", "/response", {
      queryStringParameters: {
        ...coreQueryParams,
        formData: JSON.stringify(formData),
        spotReg: true,
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
      .finally(() => setIsLoading(false))
    // =================================================================
  }

  const handleCancelClick = e => {
    navigate("/events")
  }

  const handleEventNameChange = e => {
    console.log(e.target.value)
    const filteredEventList = eventsInfo.filter(
      item => item["eventName"] === e.target.value
    )
    if (filteredEventList.length > 0) {
      setEventID(filteredEventList[0].eventID)
      console.log(eventID)
    }
  }

  // If loading, render loader
  // const isLoading = !formFields.length && !txnStatus.performed
  // if (isLoading) {
  //   return (
  //     <>
  //       <CssBaseline />
  //       <Loader size="5rem" bgColor="#333645" iconColor="white" />
  //     </>
  //   )
  // }

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
      <div className={classes.root}>
        <Grid container alignItems="center" className={classes.rootGrid}>
          <Grid container item xs={12} md={5} lg={6}>
            <Grid container item xs={12} className={classes.titleHolder}>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.titleTypo}>
                  Spot
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" className={classes.titleTypo}>
                  Registration
                </Typography>
              </Grid>
              <Grid item className={classes.titleUnderline} />
              <Grid item xs={12}>
                <Typography
                  className={[classes.fieldLabelTypo, classes.payLaterNote]}
                >
                  Spot Registration Portal. Payments collected manually.{" "}
                  {eventID === "hostel-accomodation"
                    ? "1 day of accomodation is from 11 AM to 9 AM."
                    : ""}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12} md={7} lg={6}>
            {isLoading ? (
              <Grid item xs={12}>
                <Loader size="5rem" bgColor="#333645" iconColor="white" />
              </Grid>
            ) : (
              <>
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
                        <Typography
                          variant="h6"
                          className={classes.fieldLabelTypo}
                        >
                          {field +
                            (isForHostel && field === "Amount"
                              ? " (per day)"
                              : "") +
                            ":"}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} className={classes.fieldInputHolder}>
                        {field === "Event" && eventsInfo.length > 0 ? (
                          <Select
                            disableUnderline
                            className={classes.fieldInput}
                            fullWidth
                            value={
                              eventsInfo.filter(
                                item => item["eventID"] === eventID
                              )[0].eventName
                            }
                            onChange={handleEventNameChange}
                          >
                            {eventsInfo.map(item => (
                              <MenuItem
                                value={item.eventName}
                                key={item.eventName}
                              >
                                {item.eventName}
                              </MenuItem>
                            ))}
                          </Select>
                        ) : (
                          <TextField
                            InputProps={{
                              className: classes.fieldInput,
                              disableUnderline: true,
                              readOnly: ["Event", "Amount"].includes(field),
                            }}
                            fullWidth
                            type={
                              isForHostel && field.includes("Date")
                                ? "date"
                                : "text"
                            }
                            id={field}
                            value={formData[field] || ""}
                            onChange={handleInputChange}
                            // className={classes.fieldInput}
                          />
                        )}
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
                      <Typography
                        variant="h6"
                        className={classes.actionBtnTypo}
                      >
                        Cancel
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      className={classes.actionBtn}
                      onClick={handleRegisterClick}
                    >
                      <Typography
                        variant="h6"
                        className={classes.actionBtnTypo}
                      >
                        Register
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
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
        <Grid container justify="center">
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

          <Grid item xs={12} className={classes.verticalPad}>
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
                <br />
                Thank you for registering.
              </Typography>
            </Grid>
          )}
          <Grid item className={classes.verticalPad}>
            <Button
              className={classes.actionBtn}
              onClick={() => {
                if (window) {
                  window.location.reload()
                }
              }}
            >
              <Typography variant="h6" className={classes.actionBtnTypo}>
                Go back
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default RegistrationForm
