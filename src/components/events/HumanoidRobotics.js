import React from "react"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
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

    backgroundColor: "#dc3d24",
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

    [theme.breakpoints.down("xs")]: {
      fontSize: "3.75rem",
    },
  },
  titleB: {
    color: "#18262a",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "9rem",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 0.8,

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
    backgroundColor: "#18262a",
    padding: "1.5rem",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    "&:hover": {
      backgroundColor: "#1e1e1e",
    },
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

function useWidth() {
  const theme = useTheme()
  const keys = [...theme.breakpoints.keys].reverse()
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || "xs"
  )
}

function HumanoidRobotics(props) {
  const classes = useStyles()

  const mobileNav = ["xs"].includes(useWidth())

  const briefSummaryText =
    "Humanoid robots are being developed to perform human tasks like \
    personal assistance, through which they should be able to assist \
    the sick and elderly, and dirty or dangerous jobs. The robotic \
    industry will see an increase in humanoid robots."

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        {mobileNav && (
          <Grid item xs={12} sm={6}>
            <Title classes={classes} />
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" className={classes.briefSummary}>
            {briefSummaryText}
            <Typography variant="h5" className={classes.extraInfo}>
              Workshop organized by Wingfotech in NIT Goa
            </Typography>
          </Typography>
        </Grid>
        {!mobileNav && (
          <Grid item xs={12} sm={6}>
            <Title classes={classes} />
          </Grid>
        )}
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
        <Typography align="right" className={classes.titleA}>
          HUMANOID
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="right" className={classes.titleB}>
          ROBOTICS
        </Typography>
      </Grid>
    </Grid>
  )
}

function ActionPanel(props) {
  const { classes } = props
  const registrationLink =
    "https://www.payumoney.com/paybypayumoney/#/FDD5FAEB0B834D653EA32AE59CC4DB14"
  const moreInfoFileLink =
    "https://drive.google.com/open?id=1s5RmGtFfz2b9lche1AdkyatDzlIUSRpa"

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

export default HumanoidRobotics
