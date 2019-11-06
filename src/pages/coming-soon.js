import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"

import MenuIcon from "@material-ui/icons/Menu"

import ImageSlideshow from "../components/ImageSlideshow"
import FluidImage from "../components/image"
import CountdownTimer from "../components/CountdownTimer"

const useStyles = makeStyles({
  mainSection: {
    position: "relative",
    height: "100vh",
  },
  slidesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
  },
  slideshow: {
    height: "100%",
    zIndex: -2,
    backgroundColor: "black",
    opacity: 0.8,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,

    opacity: 0.8,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  centerAlign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainSectionInnerArea: {
    flexGrow: 1,
  },
  styledDivider: {
    backgroundColor: "white",
    height: 2,
  },
  saavyasLogo: {},
})

function ComingSoon() {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <div>
        <Grid container>
          <Grid item container xs={12} className={classes.mainSection}>
            <Grid item xs={12} className={classes.slidesContainer}>
              <div className={classes.overlay} />
              <ImageSlideshow className={classes.slideshow} />
            </Grid>
            <Grid item container xs={12} direction="column">
              <Grid item>
                <IconButton>
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.mainSectionInnerArea}
              >
                <Grid item>
                  <Typography>Image here</Typography>
                  {/* <FluidImage
                    fileName="saavyas_logo.png"
                    className={classes.saavyasLogo}
                  /> */}
                </Grid>
                <Grid item>
                  <Typography
                    display="inline"
                    style={{ color: "white", display: "inline" }}
                    variant="h3"
                  >
                    We're{" "}
                  </Typography>
                  <Typography display="inline" color="secondary" variant="h2">
                    COMING SOON
                  </Typography>
                  <Divider className={classes.styledDivider} />
                </Grid>
                <Grid item>
                  <CountdownTimer />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default ComingSoon
