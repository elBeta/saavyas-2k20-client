import React, { useState } from "react"
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

import QrReader from "react-qr-reader"

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
  const [qrResult, setQrResult] = useState("a")

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

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          {qrResult === "" ? (
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
              txnId={qrResult}
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
  const { txnid, photoClickHandler, classes } = props
  const [txnDetails, setTxnDetails] = useState({
    txnid: "abc",
    "Participant Name": "Piyush",
    "College Name": "NIT Goa",
    "Event Name": "XYZ",
    amount: 100,
    paid: false,
    mailSent: true,
    "Phone Number": "9359542853",
    "Email Id": "piyush.kotian@gmail.com",
    "Registered At": Date.now(),
  })

  const getShortDate = timestamp => {
    const date = new Date(timestamp)
    return date.toLocaleString()
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
