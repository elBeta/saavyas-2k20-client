import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

// ka5g-A6hZZgT

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100%",
    padding: "10rem",
  },
  titleA: {
    color: "#B4B1C9",
    fontWeight: 700,
  },
  titleB: {
    color: "#3B3460",
    fontWeight: 700,
  },
  titleUnderline: {
    height: "6px",
    width: "60vw",
    background: "#703BE2",
  },
}))

function EntriesPage(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item>
          <Grid item xs={12}>
            <Typography variant="h1" className={classes.titleA}>
              Event
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" className={classes.titleB}>
              Entries
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <div className={classes.titleUnderline} />
        </Grid>
      </Grid>
    </div>
  )
}

export default EntriesPage
