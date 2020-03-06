import React, { useState, useEffect } from "react"
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Fab from "@material-ui/core/Fab"
import Input from "@material-ui/core/Input"

import PhotoIcon from "@material-ui/icons/PhotoCamera"

import Amplify, { API } from "aws-amplify"
import awsconfig from "../aws-exports"
import Loader from "../components/Loader"

let theme = responsiveFontSizes(createMuiTheme())

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    background: "#333645",
    padding: "1rem",
  },
  qrReaderHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
  },
  qrReader: {
    width: 300,
    height: 300,
  },
  photoFab: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    zIndex: 5000,
  },
  regDetailsRoot: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  regDetailsHeader: {
    paddingBottom: "1rem",
  },
  titleTypoHolder: {
    paddingBottom: "0.5rem",
  },
  titleTypo: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "#fafafa",
  },
  titleUnderline: {
    background: "#fafafa",
    width: "4rem",
    height: theme.spacing(1),
  },
  fieldHolder: {
    paddingBottom: "1rem",
  },
  fieldInput: {
    background: "#424556",
    fontFamily: "Barlow",
    fontWeight: 600,
    color: "#fafafa",
    padding: 4,
  },
}))

function QRScanner(props) {
  const classes = useStyles()
  const [qrResult, setQrResult] = useState("")
  const [txnDetails, setTxnDetails] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const QrReader =
    typeof window !== "undefined" ? require("react-qr-reader") : null

  useEffect(() => {
    if (qrResult === "") {
      return
    }

    setIsLoading(true)
    Amplify.configure(awsconfig)
    API.get("txnDetailsFetchAPI", "/fetch-txn-details", {
      queryStringParameters: {
        txnid: qrResult,
      },
    })
      .then(details => {
        console.log(details)
        setTxnDetails(details)
      })
      .catch(err => {
        console.log(err.response.data)
        alert(err.response.data)
        setQrResult("")
      })
      .finally(() => setIsLoading(false))
  }, [qrResult])

  const handleError = err => {}

  const handleScan = data => {
    if (data) {
      setQrResult(data)
    }
  }

  const handlePhotoClick = e => {
    console.log("clicked")
    setQrResult("")
  }

  if (isLoading) {
    return (
      <>
        <CssBaseline />
        <Loader size="5rem" bgColor="#333645" iconColor="white" />
      </>
    )
  }

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          {qrResult === "" && typeof window !== "undefined" ? (
            <div className={classes.qrReaderHolder}>
              <QrReader
                onScan={handleScan}
                onError={handleError}
                delay={300}
                className={classes.qrReader}
              />
            </div>
          ) : (
            <RegDetails
              txnDetails={txnDetails}
              photoClickHandler={handlePhotoClick}
              classes={classes}
            />
          )}
        </div>
      </ThemeProvider>
    </>
  )
}

function RegDetails(props) {
  const { txnDetails, photoClickHandler, classes } = props

  const getShortDate = timestamp => {
    const date = new Date(parseInt(timestamp))
    return (
      date.getDate() +
      "/" +
      date.getMonth() +
      "/" +
      date.getFullYear() +
      " at " +
      date.toLocaleTimeString()
    )
  }

  return (
    <div className={classes.regDetailsRoot}>
      <Fab
        color="primary"
        onClick={photoClickHandler}
        className={classes.photoFab}
      >
        <PhotoIcon />
      </Fab>
      <Grid container>
        <Grid item xs={12} container className={classes.regDetailsHeader}>
          <Grid item xs={12} className={classes.titleTypoHolder}>
            <Typography variant="h1" className={classes.titleTypo}>
              Transaction
            </Typography>
            <Typography variant="h1" className={classes.titleTypo}>
              Details
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.titleUnderline} />
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          {Object.keys(txnDetails)
            .sort((a, b) => ([a, b].includes("paid") ? 1 : 0)) // Brings paid field to top
            .map((field, index) => (
              <Grid
                item
                xs={12}
                container
                alignItems="center"
                key={index}
                className={classes.fieldHolder}
              >
                <Grid item xs={12}>
                  <Typography variant="h6" className={classes.titleTypo}>
                    {field + ":"}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Input
                    disableUnderline
                    fullWidth
                    readOnly={true}
                    id={field}
                    value={
                      field === "Registered At"
                        ? getShortDate(txnDetails[field])
                        : txnDetails[field]
                    }
                    className={classes.fieldInput}
                  />
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default QRScanner

// import React from "react"
// export default function QRScanner() {
//   return null
// }
