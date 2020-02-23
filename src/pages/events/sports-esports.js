import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import BackIcon from "@material-ui/icons/ArrowBack"
import { navigate } from "gatsby"

import EventSlide from "../../components/events/EventSlide"
import CategorySelector from "../../components/events/CategorySelector"

import { colorScheme } from "../../details/slideColorScheme"
import { events, highlightEvents } from "../../details/sportsEventsDetails"

import "../smoothScroll.css"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    overflowX: "hidden",
  },
  highlightEvents: {
    height: "60vh",
  },
  backBtn: {
    position: "fixed",
    zIndex: 100,
    top: "1rem",
    left: "1rem",
  },
}))

function EventsPage(props) {
  const classes = useStyles()

  const handleBackBtnClick = e => {
    navigate("/events")
  }

  return (
    <>
      <CssBaseline />
      <Fab
        color="primary"
        className={classes.backBtn}
        onClick={handleBackBtnClick}
      >
        <BackIcon />
      </Fab>
      <div className={classes.root}>
        {highlightEvents && highlightEvents.length !== 0 && (
          <div className={classes.highlightEvents}>
            <CategorySelector categories={highlightEvents} />
          </div>
        )}
        {events.map((event, index) => (
          <EventSlide
            rightAlign={index % 2 === 1}
            imageFileName={event.imageFileName}
            eventDate={event.eventDate}
            eventFee={event.eventFee}
            eventTime={event.eventTime}
            eventZone={event.eventZone}
            eventPrize={event.eventPrize}
            eventSummary={event.eventSummary}
            id={event.id}
            titleA={event.titleA}
            titleB={event.titleB}
            colorScheme={
              colorScheme[
                Object.keys(colorScheme)[
                  index % Object.keys(colorScheme).length
                ]
              ]
            }
            ruleBookLink={event.ruleBookLink}
            registrationLink={event.registrationLink}
          />
        ))}
      </div>
    </>
  )
}

export default EventsPage
