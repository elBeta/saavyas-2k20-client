import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import moment from "moment"

const useStyles = makeStyles({
  root: {
    padding: "1rem 0",
  },
  rightDivider: props => ({
    borderRightWidth: props.dividerWidth,
    borderRightColor: props.dividerColor,
  }),
  unitCountStyle: props => ({
    color: props.unitCountColor,
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 700,
  }),
  unitStyle: props => ({
    color: props.unitColor,
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 700,
  }),
  centerAlign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})

function CountdownTimer({
  targetDate = defaultProps.targetDate,
  dividerWidth = defaultProps.dividerWidth,
  dividerColor = defaultProps.dividerColor,
  unitCountColor = defaultProps.unitColor,
  unitColor = defaultProps.unitColor,
  spacing = defaultProps.spacing,
  unitCountTypographyVariant = defaultProps.unitCountTypographyVariant,
  unitTypographyVariant = defaultProps.unitTypographyVariant,
}) {
  const classes = useStyles({
    dividerWidth,
    dividerColor,
    unitCountColor,
    unitColor,
  })
  const [, setCurTime] = useState(Date.now())
  useEffect(() => {
    const interval = setInterval(() => setCurTime(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [])
  const timeLeft = moment.duration(targetDate.diff(moment()))
  const daysLeft = targetDate.diff(moment(), "days")

  const timeComponents = {
    DAYS: daysLeft,
    HOURS: timeLeft.hours(),
    MINS: timeLeft.minutes(),
    SECS: timeLeft.seconds(),
  }

  return (
    <Grid container spacing={spacing} justify="center" className={classes.root}>
      {Object.keys(timeComponents).map((key, index) => (
        <Grid
          item
          container
          key={key}
          xs={6}
          sm={3}
          direction="column"
          className={classes.rightDivider}
        >
          <Grid item className={classes.centerAlign}>
            <Typography
              className={classes.unitCountStyle}
              variant={unitCountTypographyVariant}
            >
              {timeComponents[key].toString().padStart(2, "0")}
            </Typography>
          </Grid>
          <Grid item className={classes.centerAlign}>
            <Typography
              className={classes.unitStyle}
              variant={unitTypographyVariant}
            >
              {key}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

const defaultProps = {
  targetDate: moment("2020-03-08 10:30:00"),
  dividerWidth: 2,
  dividerColor: "white",
  unitCountColor: "white",
  unitColor: "white",
  spacing: 6,
  unitCountTypographyVariant: "h2",
  unitTypographyVariant: "h5",
}

export default CountdownTimer
