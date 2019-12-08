import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import FluidImage from "../image"

const useStyles = makeStyles(theme => ({
  faceSlideContainer: {
    position: "relative",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      background: "black",
      opacity: 0.9,
    },
  },
  faceSlideImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    [theme.breakpoints.down("md")]: {
      opacity: 0.3,
    },
  },
  faceSlideTextContainer: {
    position: "absolute",
    top: `calc(100vh / 5)`,
    left: "2rem",
    [theme.breakpoints.between("sm", "md")]: {
      top: `calc(100vh / 5)`,
      left: `calc(100vw / 3)`,
    },
  },
  faceSlideTextA: {
    fontFamily: "Lobster",
    fontSize: "8rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: "6rem",
    },
    color: "white",
  },
  faceSlideTextB: {
    fontFamily: "Bree Serif",
    fontSize: "6rem",
    color: "white",
  },
  faceSlideTextC: {
    fontFamily: "Lobster",
    fontSize: "8rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: "6rem",
    },
    color: "white",
  },
  saavyasLogoImage: {
    marginTop: "3rem",
    marginLeft: "3rem",
  },
}))

function FaceSlide(props) {
  const classes = useStyles()

  return (
    <div className={classes.faceSlideContainer}>
      <FluidImage
        fileName="campus-ambassador/abstract-face.jpg"
        imgStyle={{
          objectFit: "cover",
          objectPosition: "center right",
        }}
        className={classes.faceSlideImage}
      />
      <div className={classes.faceSlideTextContainer}>
        <Typography variant="h1" className={classes.faceSlideTextA}>
          Be the
        </Typography>
        <Typography variant="h1" className={classes.faceSlideTextB}>
          FACE
        </Typography>
        <Typography variant="h1" className={classes.faceSlideTextC}>
          of
        </Typography>
        <FluidImage
          fileName="saaavyas_2020_font.png"
          imgStyle={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
          className={classes.saavyasLogoImage}
        />
      </div>
    </div>
  )
}
export default FaceSlide
