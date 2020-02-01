import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import CategorySelector from "../../components/events/CategorySelector"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  appbar: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "fixed",
    flexGrow: 0,
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "black",
      position: "static",
    },
  },
  toolbar: {
    justifyContent: "center",
    padding: "1rem",
  },
  appBarTitle: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  categorySelectorContainer: {
    flexGrow: 1,
  },
}))

function EventsCategory(props) {
  const classes = useStyles()

  const eventCategories = [
    { title: "Technical", fileName: "tech.jpg", link: "/events/technical" },
    { title: "Cultural", fileName: "cultural.jpg", link: "/events/cultural" },
    {
      title: "Entertainment",
      fileName: "entertainment.jpg",
      link: "/events/entertainment",
    },
    {
      title: "Sports and eSports",
      fileName: "sports_esports.jpg",
      link: "/events/sports_esports",
    },
  ]

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h3" className={classes.appBarTitle}>
              EVENTS
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.categorySelectorContainer}>
          <CategorySelector categories={eventCategories} />
        </div>
      </div>
    </>
  )
}

export default EventsCategory
