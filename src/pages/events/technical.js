import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"

import EventSlide from "../../components/events/EventSlide"
import CategorySelector from "../../components/events/CategorySelector"

import { events, highlightEvents } from "../../details/eventDetails"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
  },
  highlightEvents: {
    height: "60vh",
  },
}))

function EventsPage(props) {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.highlightEvents}>
          <CategorySelector categories={highlightEvents} />
        </div>
        {events.map(event => (
          <EventSlide
            rightAlign={event.rightAlign}
            imageFileName={event.imageFileName}
            eventSummary={event.eventSummary}
            id={event.id}
            titleA={event.titleA}
            titleB={event.titleB}
            colorScheme={event.colorScheme}
            ruleBookLink={event.ruleBookLink}
            registrationLink={event.registrationLink}
          />
        ))}
      </div>
    </>
  )
}

export default EventsPage
