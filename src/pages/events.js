import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import IoTwithGoogle from "../components/events/IoTwithGoogle"
import HumanoidRobotics from "../components/events/HumanoidRobotics"
import ArtificialIntelligence from "../components/events/ArtificialIntelligence"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
  },
}))

function EventsPage(props) {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <IoTwithGoogle />
        <HumanoidRobotics />
        <ArtificialIntelligence />
      </div>
    </>
  )
}

export default EventsPage
