import React from "react"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import FluidImage from "../image"

const useStyles = makeStyles(theme => ({
  root: props => ({
    minHeight: "100vh",
    width: "100%",
    padding: "2rem",
    paddingLeft: "5rem",
    paddingRight: "5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },

    backgroundColor: props.backgroundColor,
    border: "2px solid black",

    display: "flex",
    alignItems: "center",
  }),
  eventTitleContainer: {
    paddingBottom: "3rem",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "1rem",
    },
  },
  titleA: props => ({
    color: props.titleAColor,
    fontFamily: "Barlow Semi Condensed",
    fontSize: "8rem",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.00938em",
    lineHeight: 0.8,

    [theme.breakpoints.only("sm")]: {
      fontSize: "6.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.5rem",
      overflowWrap: "break-word",
    },
  }),
  titleB: props => ({
    color: props.titleBColor,
    fontFamily: "Barlow Semi Condensed",
    fontSize: "7rem",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.00938em",
    lineHeight: 0.8,

    [theme.breakpoints.only("sm")]: {
      fontSize: "6.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.5rem",
      overflowWrap: "break-word",
    },
  }),
  mobileCenterAlign: {
    display: "flex",
    justifyContent: "center",
  },
  prizeField: {
    fontWeight: 700,
    fontSize: "2rem !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem !important",
    },
  },
  impFieldContent: props => ({
    fontFamily: "Barlow",
    color: props.contentColor,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      display: "block",
      textAlign: "center",
    },
  }),
  impFieldLabel: props => ({
    fontWeight: 700,
    color: props.fieldColor,
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  }),
  eventSummary: props => ({
    color: props.contentColor,
    fontFamily: "Barlow",
    paddingTop: "0.5rem",
    paddingBottom: "1.25rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  }),
  eventImage: {
    maxHeight: "30rem",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "12rem",
    },
  },
  knowMoreBtn: props => ({
    borderRadius: 0,
    backgroundColor: props.btnBGColor,
    padding: "1.5rem",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    "&:hover": {
      backgroundColor: props.btnHoverColor,
    },
    marginTop: "2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem",
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
      marginTop: "0.75rem",
    },
  }),
  btnTypo: props => ({
    color: props.btnTypoColor,
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 900,
    letterSpacing: "0.00938em",
    lineHeight: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  }),
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

function EventSlide(props) {
  const {
    rightAlign,
    colorScheme,
    imageFileName,
    eventDate,
    eventFee,
    eventTime,
    eventZone,
    eventPrize,
    eventSummary,
    id,
    titleA,
    titleB,
    ruleBookLink,
    registrationLink,
    registrationLink2,
  } = props
  const classes = useStyles(colorScheme)

  const mobileMode = ["xs", "sm"].includes(useWidth())

  const eventImageHAlign = mobileMode ? "center" : rightAlign ? "left" : "right"

  const imageComponent = imageFileName && (
    <Grid item xs={12} md={6}>
      <FluidImage
        fileName={"event-posters/" + imageFileName}
        className={classes.eventImage}
        imgStyle={{
          objectFit: "contain",
          objectPosition: `center ${eventImageHAlign}`,
        }}
      />
    </Grid>
  )

  return (
    <div className={classes.root} id={id}>
      <Grid container alignItems="center">
        {!(mobileMode || !rightAlign) && imageComponent}
        <Grid
          container
          direction={!rightAlign || mobileMode ? "row" : "row-reverse"}
          item
          xs={12}
          md={imageFileName || mobileMode ? 6 : 12}
        >
          <Grid item xs={imageFileName || mobileMode ? 12 : 6}>
            <EventTitle
              classes={classes}
              titleA={titleA}
              titleB={titleB}
              rightAlign={rightAlign}
              mobileMode={mobileMode}
            />
          </Grid>
          <Grid item xs={imageFileName || mobileMode ? 12 : 6}>
            <EventContent
              classes={classes}
              eventDate={eventDate}
              eventFee={eventFee}
              eventTime={eventTime}
              eventZone={eventZone}
              eventPrize={eventPrize}
              eventSummary={eventSummary}
            />
          </Grid>
        </Grid>
        {(mobileMode || !rightAlign) && imageComponent}
        <Grid item xs={12}>
          <ActionPanel
            classes={classes}
            mobileMode={mobileMode}
            ruleBookLink={ruleBookLink}
            registrationLink={registrationLink}
            registrationLink2={registrationLink2}
          />
        </Grid>
      </Grid>
    </div>
  )
}

function EventTitle(props) {
  const { classes, rightAlign, titleA, titleB, mobileMode } = props

  return (
    <Grid container className={classes.eventTitleContainer}>
      <Grid item xs={12}>
        <Typography
          align={mobileMode ? "center" : rightAlign ? "right" : "left"}
          className={classes.titleA}
        >
          {titleA}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={mobileMode ? "center" : rightAlign ? "right" : "left"}
          className={classes.titleB}
        >
          {titleB}
        </Typography>
      </Grid>
    </Grid>
  )
}

function EventContent(props) {
  const {
    classes,
    eventDate,
    eventTime,
    eventFee,
    eventZone,
    eventPrize,
    eventSummary,
  } = props

  return (
    <Grid container>
      <Grid container justify="space-between" item xs={12}>
        <Grid item xs={6} sm={12}>
          <Typography
            variant="h5"
            display="inline"
            className={[classes.impFieldContent, classes.impFieldLabel]}
          >
            Date:{" "}
          </Typography>
          <Typography
            variant="h5"
            display="inline"
            className={classes.impFieldContent}
          >
            {eventDate || "NA"}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={12}>
          <Typography
            variant="h5"
            display="inline"
            className={[classes.impFieldContent, classes.impFieldLabel]}
          >
            Time:{" "}
          </Typography>
          <Typography
            variant="h5"
            display="inline"
            className={classes.impFieldContent}
          >
            {eventTime || "NA"}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={12}>
          <Typography
            variant="h5"
            display="inline"
            className={[classes.impFieldContent, classes.impFieldLabel]}
          >
            Zone:{" "}
          </Typography>
          <Typography
            variant="h5"
            display="inline"
            className={classes.impFieldContent}
          >
            {eventZone || "NA"}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={12}>
          <Typography
            variant="h5"
            display="inline"
            className={[classes.impFieldContent, classes.impFieldLabel]}
          >
            Fee:{" "}
          </Typography>
          <Typography
            variant="h5"
            display="inline"
            className={classes.impFieldContent}
          >
            {eventFee == null
              ? "NA"
              : eventFee === 0
              ? "Free"
              : "Rs " + eventFee}
          </Typography>
        </Grid>
        {eventPrize && (
          <Grid item xs={12}>
            <Typography
              variant="h4"
              display="inline"
              className={[
                classes.prizeField,
                classes.impFieldContent,
                classes.impFieldLabel,
              ]}
            >
              Prize:{" "}
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              className={[classes.prizeField, classes.impFieldContent]}
            >
              {eventPrize}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.eventSummary}>
          {eventSummary}
        </Typography>
      </Grid>
    </Grid>
  )
}

function ActionPanel(props) {
  const {
    classes,
    mobileMode,
    ruleBookLink,
    registrationLink,
    registrationLink2,
  } = props

  return (
    <Grid container justify={mobileMode ? "center" : "space-between"}>
      <Grid item>
        <a
          href={ruleBookLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.knowMoreBtn}
          >
            <Typography variant="h3" className={classes.btnTypo}>
              Know More
            </Typography>
          </Button>
        </a>
      </Grid>
      <Grid item>
        <a
          href={registrationLink}
          rel="noopener noreferrer"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.knowMoreBtn}
          >
            <Typography variant="h3" className={classes.btnTypo}>
              Register: Step 1
            </Typography>
          </Button>
        </a>
      </Grid>
      <Grid item>
        <a
          href={registrationLink2}
          rel="noopener noreferrer"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.knowMoreBtn}
          >
            <Typography variant="h3" className={classes.btnTypo}>
              Register: Step 2
            </Typography>
          </Button>
        </a>
      </Grid>
    </Grid>
  )
}

export default EventSlide
