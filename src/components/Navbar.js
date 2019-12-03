import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Appbar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"

import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  link: {
    color: "white",
    textDecoration: "solid",
    fontSize: "1.5rem",
  },
}))

function Navbar(props) {
  const classes = useStyles()

  // return (
  //   <Appbar>
  //     <Toolbar>
  //       <IconButton color="inherit">
  //         <MenuIcon />
  //       </IconButton>
  //     </Toolbar>
  //   </Appbar>
  // )

  return (
    <Appbar>
      <Toolbar>
        <Grid container justify="space-around">
          <Grid container justify="space-around" item xs={12}>
            <Grid item>
              <a className={classes.link} href="#meet-the-team">
                MEET THE TEAM
              </a>
            </Grid>
            <Grid item>
              <a className={classes.link} href="#registration">
                REGISTRATION
              </a>
            </Grid>
            <Grid item>
              <a className={classes.link} href="#ca">
                CAMPUS AMBASSADOR
              </a>
            </Grid>
            <Grid item>
              <a className={classes.link} href="#gallery">
                GALLERY
              </a>
            </Grid>
            <Grid item>
              <a className={classes.link} href="#sponsors">
                SPONSORS
              </a>
            </Grid>
          </Grid>
          <Grid container justify="space-around" item xs={12}>
            <Grid item>
              <a className={classes.link} href="#home">
                HOME
              </a>
            </Grid>
            <Grid item>
              <a className={classes.link} href="#about-us">
                ABOUT US
              </a>
            </Grid>
            <Grid item>
              <a className={classes.link} href="#events">
                EVENTS
              </a>
            </Grid>
            <Grid item>
              <a className={classes.link} href="#contact-us">
                CONTACT US
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </Appbar>
  )
}

export default Navbar
