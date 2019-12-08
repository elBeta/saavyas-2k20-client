import React from "react"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"

import Navbar from "../components/Navbar"
import HamburgerMenu from "../components/HamburgerMenu"

const useStyles = makeStyles(theme => ({
  root: {},
  slidesContainer: {},
  slide: {
    border: "1px solid blue",
    height: "100vh",
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

function MainPage(props) {
  const classes = useStyles()

  const mobileNav = ["xs", "sm"].includes(useWidth())

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        {mobileNav ? <HamburgerMenu /> : <Navbar />}
        <Grid container direction="column" className={classes.slidesContainer}>
          <Grid item className={classes.slide} id="home"></Grid>
          <Grid item className={classes.slide} id="about-us"></Grid>
          <Grid item className={classes.slide} id="events"></Grid>
          <Grid item className={classes.slide} id="contact-us"></Grid>
        </Grid>
      </div>
    </>
  )
}

export default MainPage
