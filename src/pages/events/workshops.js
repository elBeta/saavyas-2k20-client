import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import BackIcon from "@material-ui/icons/ArrowBack"
import { navigate } from "gatsby"

import EventSlide from "../../components/events/EventSlide"
import WOLEvent from "../../components/events/WOLEvent"
import CategorySelector from "../../components/events/CategorySelector"

import { colorScheme } from "../../details/slideColorScheme"
import { events, highlightEvents } from "../../details/workshopDetails"

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

function WorkshopPage(props) {
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
        <WOLEvent
          rightAlign={true}
          titleA="Week of"
          titleB="learning"
          id="wol"
          imageFileName="wol.png"
          colorScheme={colorScheme.redBlackWhite}
          eventDate="25 Feb 2020 to 07 Mar 2020"
          eventFee={0}
          eventSummary={
            `Week of Learning is here! 
          Here is your chance to learn the most in-demand technologies and be ready for your next internship! 
          Week of Learning is an intensive week-long learning program from Progate Japan. It is a combination of online and offline learning where you will learn web development from absolute basics and build your own first project! 
          Saavyas'20, NIT Goa is happy to bring Week of Learning for all students in NIT Goa.` +
            `Join the team on Progate first (step 1), then complete the registration using link 2`
          }
          registrationLink="http://bit.ly/joinprogatewolnitgoa"
          registrationLink2="http://bit.ly/registerforwolnitgoa"
        />
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

export default WorkshopPage
