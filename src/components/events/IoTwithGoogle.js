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

    backgroundColor: "#3aafa9",
    border: "2px solid black",

    display: "flex",
    alignItems: "center",
  },
  titleA: {
    color: "white",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "9rem",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 0.8,

    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "7rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "6.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.75rem",
    },
  },
  titleB: {
    color: "#18262a",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "5rem",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 0.8,

    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "4.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  titleC: {
    color: "#18262a",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "9rem",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 0.8,

    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "7rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "6.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.75rem",
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
  extraInfo: {
    color: "black",
    fontFamily: "Barlow",
    fontWeight: 700,
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

function IoTwithGoogle(props) {
  const classes = useStyles()

  const briefSummaryText =
    "Internet of Things (IoT) is an ecosystem of connected physical \
  things that are accessible through the internet. The 'Thing' in IoT \
  could be a person with a heart monitor or an automobile with \
  built-in-sensors, i.e. objects that have been assigned an IP address \
  and could collect and transfer data over a network without manual \
  intervention."

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <Title classes={classes} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className={classes.briefSummary}>
            {briefSummaryText}
            <Typography variant="h5" className={classes.extraInfo}>
              Workshop organized by Wingfotech in NIT Goa
            </Typography>
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
        <Typography display="inline" className={classes.titleA}>
          IoT{" "}
        </Typography>
        <Typography display="inline" className={classes.titleB}>
          WITH
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.titleC}>GOOGLE</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.titleC}>ASSISTANT</Typography>
      </Grid>
    </Grid>
  )
}

function ActionPanel(props) {
  const { classes } = props
  const registrationLink =
    "https://www.payumoney.com/paybypayumoney/#/FDD5FAEB0B834D653EA32AE59CC4DB14"
  const moreInfoFileLink =
    "https://drive.google.com/open?id=1_B4qjVQCczijVXZO0tP-5Rmr1xZd61bA"

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

export default IoTwithGoogle
