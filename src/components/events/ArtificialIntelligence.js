import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    padding: "2rem",
    paddingLeft: "5rem",
    paddingRight: "5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },

    backgroundColor: "#5cdb95",
    border: "2px solid black",

    display: "flex",
    alignItems: "center",
  },
  titleA: {
    color: "#05386b",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "9rem",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 0.8,

    [theme.breakpoints.down("xs")]: {
      fontSize: "3.75rem",
    },
  },
  titleB: {
    color: "#edf5e1",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "5rem",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 0.8,

    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
  briefSummary: {
    color: "white",
    fontFamily: "Barlow",
    paddingTop: "1.25rem",
    paddingBottom: "1.25rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  knowMoreBtn: {
    borderRadius: 0,
    backgroundColor: "#05396b",
    padding: "1.5rem",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    marginTop: "2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem",
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
      marginTop: "0.75rem",
    },
  },
  btnTypo: {
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 1,
  },
}))

function ArtificialIntelligence(props) {
  const classes = useStyles()

  const briefSummaryText =
    "Today, the amount of data that is generated, by \
  both humans and machines, far outpaces humans' ability \
  to absorb, interpret, and make complex decisions based \
  on that data. Artificial intelligence forms the basis \
  for all computer learning and is the future of all complex \
  decision making."

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6}>
          <Title classes={classes} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" className={classes.briefSummary}>
            {briefSummaryText}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ActionPanel classes={classes} />
        </Grid>
      </Grid>
    </div>
  )
}

function Title(props) {
  const { classes } = props

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={classes.titleA}>ARTIFICIAL</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.titleB}>INTELLIGENCE</Typography>
      </Grid>
    </Grid>
  )
}

function ActionPanel(props) {
  const { classes } = props
  const registrationLink =
    "https://www.payumoney.com/paybypayumoney/#/FDD5FAEB0B834D653EA32AE59CC4DB14"
  const moreInfoFileLink =
    "https://drive.google.com/open?id=1hYYpwkavE8z3eaHtZ1inMeTYyzR1CXbq"

  return (
    <Grid container justify="space-between">
      <Grid item>
        <a
          href={moreInfoFileLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.knowMoreBtn}
          >
            <Typography variant="h3" className={classes.btnTypo}>
              Know More
            </Typography>
          </Button>
        </a>
      </Grid>
      <Grid item>
        <a
          href={registrationLink}
          rel="noopener noreferrer"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.knowMoreBtn}
          >
            <Typography variant="h3" className={classes.btnTypo}>
              Register
            </Typography>
          </Button>
        </a>
      </Grid>
    </Grid>
  )
}

export default ArtificialIntelligence
