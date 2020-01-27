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
  },
  titleB: {
    color: "#18262a",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "5rem",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 0.8,
  },
  titleC: {
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
    backgroundColor: "#05396b",
    padding: "1.5rem",
    paddingLeft: "4rem",
    paddingRight: "4rem",
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

  const briefSummaryText = `Internet of Things (IoT) is an ecosystem of connected physical
  things that are accessible through the internet. The 'Thing' in IoT
  could be a person with a heart monitor or an automobile with
  built-in-sensors, i.e. objects that have been assigned an IP address
  and could collect and transfer data over a network without manual
  intervention.`

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={4}>
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

export default IoTwithGoogle
