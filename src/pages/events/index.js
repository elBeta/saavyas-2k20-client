import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import { navigate } from "gatsby"

import BackIcon from "@material-ui/icons/ArrowBack"

import CategorySelector from "../../components/events/CategorySelector"
import { eventCategories } from "../../details/eventCategories"

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
    padding: "1rem",
  },
  appBarTitle: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "white",
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  categorySelectorContainer: {
    flexGrow: 1,
  },
  backBtn: {
    float: "left",
    paddingLeft: "0.5rem",
    color: "white",
  },
}))

function EventsCategory(props) {
  const classes = useStyles()

  const handleBackBtnClick = e => {
    navigate("/")
  }

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.backBtn}
              onClick={handleBackBtnClick}
            >
              <BackIcon fontSize="large" />
            </IconButton>
            <Typography
              variant="h3"
              align="center"
              className={classes.appBarTitle}
            >
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
