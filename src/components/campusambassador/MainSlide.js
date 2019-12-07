import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import FluidImage from "../image"

const useStyles = makeStyles(theme => ({
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainSlide: {
    display: "flex",
    flexWrap: "wrap",
    background: "linear-gradient(to right, #c5d3d9, #dbe3e6)",
    width: "100%",
    height: "100%",
  },
  mainSlideImage: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "50%",
    },
    width: "50%",
  },
  mainSlideTextContainer: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "50%",
    },
    width: "50%",
  },
  mainSlideText: {
    fontFamily: "Barlow Semi Condensed",
    color: "#7b26ac",
    lineHeight: "0.75",
  },
  mainSlideTextA: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "7rem",
    },
    fontSize: "8rem",
  },
  mainSlideTextB: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "5rem",
    },
    fontSize: "6rem",
  },
}))

function MainSlide(props) {
  const { mobileMode } = props
  const classes = useStyles()

  return (
    <div className={classes.mainSlide}>
      <MainSlideImage classes={classes} mobileMode={mobileMode} />
      <MainSlideTitle classes={classes} />
    </div>
  )
}

function MainSlideImage(props) {
  const { mobileMode, classes } = props

  return (
    <FluidImage
      fileName="campus-ambassador/birds.png"
      imgStyle={{
        objectFit: "contain",
        objectPosition: `${mobileMode ? "top" : "center"} center`,
      }}
      className={classes.mainSlideImage}
    />
  )
}

function MainSlideTitle(props) {
  const { classes } = props

  return (
    <div className={`${classes.centerAlign} ${classes.mainSlideTextContainer}`}>
      <Grid container direction="column" alignItems="center">
        {"CAMPUS AMBASSADOR PROGRAMME".split(" ").map(word => (
          <Grid item key={word}>
            <Typography
              display="inline"
              className={[classes.mainSlideText, classes.mainSlideTextA]}
            >
              {word[0]}
            </Typography>
            <Typography
              display="inline"
              className={[classes.mainSlideText, classes.mainSlideTextB]}
            >
              {word.substring(1)}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MainSlide
