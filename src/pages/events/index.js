import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import CategorySelector from "../../components/events/CategorySelector"

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "fixed",
  },
  toolbar: {
    justifyContent: "center",
    padding: "1rem",
  },
  appBarTitle: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "white",
  },
}))

function EventsCategory(props) {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h3" className={classes.appBarTitle}>
            EVENTS
          </Typography>
        </Toolbar>
      </AppBar>
      <CategorySelector />
    </>
  )
}

export default EventsCategory
