import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    paddingLeft: "5rem",
    paddingRight: "5rem",
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
  },
  titleB: {
    color: "#18262a",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "9rem",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 0.8,
  },
  briefSummary: {
    color: "white",
    fontFamily: "Barlow",
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
  },
  btnTypo: {
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 1,
  },
}))

function HumanoidRobotics(props) {
  const classes = useStyles()

  const briefSummaryText =
    "Humanoid robots are being developed to perform human tasks like \
    personal assistance, through which they should be able to assist \
    the sick and elderly, and dirty or dangerous jobs. The robotic \
    industry will see an increase in humanoid robots."

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" className={classes.briefSummary}>
            {briefSummaryText}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Title classes={classes} />
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
  return (
    <Grid container justify="space-between">
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          className={classes.knowMoreBtn}
        >
          <Typography variant="h3" className={classes.btnTypo}>
            Know More
          </Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          className={classes.knowMoreBtn}
        >
          <Typography variant="h3" className={classes.btnTypo}>
            Register
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

export default HumanoidRobotics
