import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import InfoCard from "../InfoCard"

const useStyles = makeStyles(theme => ({
  slideRoot: {
    height: "100%",
    width: "100%",
    background: "#232332",
    padding: "6rem",
    [theme.breakpoints.only("xs")]: {
      padding: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      padding: "3rem",
    },
  },
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

function WhyCASlide(props) {
  const classes = useStyles()

  return (
    <div className={`${classes.slideRoot} ${classes.centerAlign}`}>
      <InfoCard />
    </div>
  )
}

export default WhyCASlide
