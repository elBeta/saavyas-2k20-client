import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import incentivesLogo from "../../assets/images/campus-ambassador/incentives.svg"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    padding: "4rem",
    paddingTop: "6rem",
    [theme.breakpoints.only("xs")]: {
      padding: "1rem",
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: "2rem",
    },
  },
  title: {
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 700,
    paddingBottom: "6rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: "2.5rem",
      paddingBottom: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      paddingTop: "3rem",
    },
    // borderBottom: "2px solid currentColor",
  },
  logo: {
    width: "20rem",
    height: "20rem",
    [theme.breakpoints.only("xs")]: {
      width: "15rem",
      height: "15rem",
      paddingTop: "2rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.between("sm", "md")]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  incentive: {
    paddingBottom: "1rem",
  },
  incentiveHeader: {
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 700,
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.75rem",
    },
  },
  incentiveContent: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
    },
  },
}))

function IncentivesSlide(props) {
  const classes = useStyles()
  const { mobileMode } = props

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid item>
        <Typography variant="h2" className={classes.title}>
          INCENTIVES
        </Typography>
      </Grid>
      <Grid container item>
        <Grid container direction="column" item xs={12} sm={4}>
          <Grid item className={classes.incentive}>
            <Typography
              variant="h4"
              align={mobileMode ? "center" : "right"}
              className={classes.incentiveHeader}
            >
              Certification
            </Typography>
            <Typography
              variant="body1"
              align={mobileMode ? "center" : "right"}
              className={classes.incentiveContent}
            >
              Get Certificate of Organization
            </Typography>
          </Grid>
          <Grid item className={classes.incentive}>
            <Typography
              variant="h4"
              align={mobileMode ? "center" : "right"}
              className={classes.incentiveHeader}
            >
              Recognition
            </Typography>
            <Typography
              variant="body1"
              align={mobileMode ? "center" : "right"}
              className={classes.incentiveContent}
            >
              Get recognition on Social Media
            </Typography>
          </Grid>
          <Grid item className={classes.incentive}>
            <Typography
              variant="h4"
              align={mobileMode ? "center" : "right"}
              className={classes.incentiveHeader}
            >
              Discount Coupons
            </Typography>
            <Typography
              variant="body1"
              align={mobileMode ? "center" : "right"}
              className={classes.incentiveContent}
            >
              Get discount coupons on accommodation during the fest
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.centerAlign}>
          <img src={incentivesLogo} className={classes.logo} />
        </Grid>
        <Grid container direction="column" item xs={12} sm={4}>
          <Grid item className={classes.incentive}>
            <Typography
              variant="h4"
              align={mobileMode ? "center" : "left"}
              className={classes.incentiveHeader}
            >
              Free Passes
            </Typography>
            <Typography
              variant="body1"
              align={mobileMode ? "center" : "left"}
              className={classes.incentiveContent}
            >
              Get exclusive free passes to Pro-nights
            </Typography>
          </Grid>
          <Grid item className={classes.incentive}>
            <Typography
              variant="h4"
              align={mobileMode ? "center" : "left"}
              className={classes.incentiveHeader}
            >
              Free Merch**
            </Typography>
            <Typography
              variant="body1"
              align={mobileMode ? "center" : "left"}
              className={classes.incentiveContent}
            >
              Get free Saavyas Merchandise** and a chance to win exciting
              goodies
            </Typography>
          </Grid>
          <Grid item className={classes.incentive}>
            <Typography
              variant="h4"
              align={mobileMode ? "center" : "left"}
              className={classes.incentiveHeader}
            >
              Meet Eminent Personalities
            </Typography>
            <Typography
              variant="body1"
              align={mobileMode ? "center" : "left"}
              className={classes.incentiveContent}
            >
              Get a chance to meet eminent personalities
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid container direction="column" spacing={6} item xs={12} sm={4}>
          <Grid item>
            <Typography variant="h4" align="left">
              Free Passes
            </Typography>
            <Typography variant="body1" align="left">
              Get exclusive free passes to Pro-nights
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" align="left">
              Free Merch**
            </Typography>
            <Typography variant="body1" align="left">
              Get free Saavyas Merchandise** and a chance to win exciting
              goodies
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" align="left">
              Meet Eminent Personalities
            </Typography>
            <Typography variant="body1" align="left">
              Get a chance to meet eminent personalities
            </Typography>
          </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  )
}

export default IncentivesSlide
