import React from "react"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"

import Navbar from "../components/Navbar"
import HamburgerMenu from "../components/HamburgerMenu"
import MainSlide from "../components/campusambassador/MainSlide"

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

function CA() {
  const classes = useStyles()
  const curBreakpoint = useWidth()
  const mobileMode = curBreakpoint === "xs"
  const tabletMode = curBreakpoint === "sm"

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        {mobileMode | tabletMode ? <HamburgerMenu /> : <Navbar />}
        <Grid container direction="column" className={classes.slidesContainer}>
          <Grid container item className={classes.slide}>
            <MainSlide mobileMode={mobileMode} />
          </Grid>
          <Grid container item className={classes.slide}></Grid>
        </Grid>
      </div>
    </>
  )
}

export default CA
