import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: props => ({
    height: "100%",
    width: "100%",
  }),
  cardRoot: props => ({
    padding: "5rem",
    [theme.breakpoints.only("xs")]: {
      padding: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      padding: "3rem",
    },
  }),
  cardPrimaryRoot: props => ({
    backgroundColor: props.cardPrimaryBGColor,
  }),
  cardSecondaryRoot: props => ({
    backgroundColor: props.cardSecondaryBGColor,
  }),
  cardPrimaryTypo: props => ({
    fontFamily: "Barlow Condensed",
    color: props.cardPrimaryFontColor,
    [theme.breakpoints.only("xs")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.25rem",
    },
  }),
  cardSecondaryTypo: props => ({
    color: props.cardSecondaryFontColor,
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.5rem",
    },
  }),
}))

function InfoCard({
  cardPrimaryBGColor = defaultProps.cardPrimaryBGColor,
  cardSecondaryBGColor = defaultProps.cardSecondaryBGColor,
  cardPrimaryFontColor = defaultProps.cardPrimaryFontColor,
  cardSecondaryFontColor = defaultProps.cardSecondaryFontColor,
}) {
  const classes = useStyles({
    cardPrimaryBGColor,
    cardSecondaryBGColor,
    cardPrimaryFontColor,
    cardSecondaryFontColor,
  })

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <Card
          square={true}
          elevation={0}
          className={[classes.cardPrimaryRoot, classes.cardRoot]}
        >
          <Typography variant="h1" className={classes.cardPrimaryTypo}>
            WHY BECOME
          </Typography>
          <Typography variant="h1" className={classes.cardPrimaryTypo}>
            A CAMPUS
          </Typography>
          <Typography variant="h1" className={classes.cardPrimaryTypo}>
            AMBASSADOR ?
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          square={true}
          elevation={0}
          className={[classes.cardSecondaryRoot, classes.cardRoot]}
        >
          <ul style={{ paddingInlineStart: "1rem" }}>
            <li style={{ marginBottom: "1rem" }}>
              <Typography variant="h6" className={classes.cardSecondaryTypo}>
                Boost your managerial, communication and leadership skillset
              </Typography>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <Typography variant="h6" className={classes.cardSecondaryTypo}>
                Open to exploring new opportunities to learn and grow
              </Typography>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <Typography variant="h6" className={classes.cardSecondaryTypo}>
                Enhance your image by representing your college at a higher
                level
              </Typography>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <Typography variant="h6" className={classes.cardSecondaryTypo}>
                Steer your team towards the title of College Trophy
              </Typography>
            </li>
          </ul>
        </Card>
      </Grid>
      <Grid item></Grid>
    </Grid>
  )
}

const defaultProps = {
  cardPrimaryBGColor: "#3B3566",
  cardSecondaryBGColor: "white",
  cardPrimaryFontColor: "white",
  cardSecondaryFontColor: "black",
}

export default InfoCard
