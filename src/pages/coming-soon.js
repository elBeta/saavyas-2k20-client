import React, { useState } from "react"
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Dialog from "@material-ui/core/Dialog"
import Slide from "@material-ui/core/Slide"

import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import LocateIcon from "@material-ui/icons/MyLocation"

import ImageSlideshow from "../components/ImageSlideshow"
import CountdownTimer from "../components/CountdownTimer"
import ShareButtons from "../components/ShareButtons"
import FluidImage from "../components/image"


const theme = responsiveFontSizes(createMuiTheme());
theme.typography.body1 = {
  fontSize: '1rem',
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.8rem',
  }
}

const useStyles = makeStyles({
  mainSection: {
    position: "relative",
    height: "100vh",
    overflowX: "hidden",
    overflowY: "hidden"
  },
  comingSoonTypo: {
    fontFamily: "Permanent Marker, Roboto",
    color: "#ff0066",
    [theme.breakpoints.only("xs")]: {
      fontSize: "2.6rem"
    },
  },
  slidesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
  },
  slideshow: {
    height: "100%",
    zIndex: -2,
    backgroundColor: "black",
    opacity: 0.8,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,

    opacity: 0.8,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  centerAlign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainSectionInnerArea: {
    flexGrow: 1,
  },
  styledDivider: {
    backgroundColor: "white",
    height: 2,
  },
  saavyasLogo: {
    width: '20rem',

    [theme.breakpoints.down('xs')]: {
      width: '15rem'
    }
  },
})

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

function ComingSoon() {
  const classes = useStyles()
  const [moreInfoOpen, setMoreInfoOpen] = useState(false)

  const handleMoreInfoClick = e => {
    setMoreInfoOpen(true)
  }

  const handleMoreInfoClose = e => {
    setMoreInfoOpen(false)
  }

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div>
          <Grid container>
            <Grid item container xs={12} className={classes.mainSection}>
              <Grid item xs={12} className={classes.slidesContainer}>
                <div className={classes.overlay} />
                <ImageSlideshow className={classes.slideshow} />
              </Grid>
              <Grid item container xs={12} direction="column">
                <Grid item>
                  <IconButton onClick={handleMoreInfoClick}>
                    <MenuIcon style={{ fill: "white" }} />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                  className={classes.mainSectionInnerArea}
                >
                  <Grid item>
                    <FluidImage fileName="saavyas_logo_with_text.png" className={classes.saavyasLogo} />
                  </Grid>
                  <Grid item>
                    <Typography color="secondary" variant="h1" className={classes.comingSoonTypo}>
                      COMING SOON
                    </Typography>
                    <Divider className={classes.styledDivider} />
                  </Grid>
                  <Grid item>
                    <CountdownTimer />
                  </Grid>
                  <Grid item>
                    <ShareButtons />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <MoreInfo open={moreInfoOpen} handleClose={handleMoreInfoClose} />
      </ThemeProvider>

    </>
  )
}

const useStyles2 = makeStyles({
  moreInfoDialog: {
    backgroundColor: "#212121",
  },
  root: {
    height: "100%",
    width: "100%",
    maxHeight: '100%',
    maxWidth: '100%',
    padding: 24,
  },
  titleColor1: {
    color: "#ff0066",
  },
  titleColor2: {
    color: "#ffffff",
  },
  locateIconColor: {
    fill: "#ff0066",
  },
  containerRoot: {
    height: '100%',
  },
  closeIconItem: {
    flexGrow: 0,
  },
  mainArea: {
    flexGrow: 1,
  },
  styledDivider: {
    backgroundColor: "white",
    height: 2,
    width: '30%',
    [theme.breakpoints.only('sm')]: {
      width: '40%'
    },
    [theme.breakpoints.only('xs')]: {
      width: '60%'
    }
  },
  centerAlign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    borderBottomStyle: "solid",
    borderBottomWidth: 3,
    borderBottomColor: "white",
    width: 'max-content',
    paddingRight: '5rem',
    [theme.breakpoints.only('xs')]: {
      paddingRight: '2rem',
    }
  }
})

function MoreInfo(props) {
  const classes2 = useStyles2()
  const contactDetails = { 'Devanshi': '123456789', 'Damodar': '123456789', 'Nihal': '123456789', 'Aashay': '123456789', 'Vishal': '123456789', }

  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.handleClose}
      TransitionComponent={Transition}
      classes={{ paper: classes2.moreInfoDialog }}
    >
      <div className={classes2.root}>
        <Grid container className={classes2.containerRoot}>
          <Grid item xs={12} className={classes2.closeIconItem}>
            <IconButton onClick={props.handleClose}>
              <CloseIcon style={{ fill: "white" }} />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="column"
            justify="space-between"
            className={classes2.mainArea}
            spacing={1}
          >
            <Grid item>
              <AboutUs classes={classes2} />
            </Grid>
            <Grid item>
              <ContactUs classes={classes2} contactDetails={contactDetails} />
            </Grid>
            <Grid item>
              <FindUs classes={classes2} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  )
}

function MoreInfoTitle(props) {
  const { classes, title } = props;
  const titleStart = title.split(' ')[0] + " "
  const titleEnd = title.split(' ')[1]

  return (
    <div className={classes.titleContainer}>
      <Typography
        display="inline"
        variant="h2"
        className={classes.titleColor1}
      >
        {titleStart}
      </Typography>
      <Typography
        display="inline"
        variant="h2"
        className={classes.titleColor2}
      >
        {titleEnd}
      </Typography>
    </div>
  );
}

function AboutUs(props) {
  const { classes } = props;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <MoreInfoTitle classes={classes} title="About Us" />
      </Grid>
      <Grid item>
        <Typography variant="body1" className={classes.titleColor2}>
          Saavyas'19 is to be the second edition of the annual
          inter-college techno-cultural fest of National Institute of
          Technology Goa. It will be a three-day event involving
          technical, music, arts, dance and drama enthusiasts from all
          over the country through competitions and performances. The
          name Saavyas finds its roots in a Sanskrit word meaning
          ‘bringing people together’. We believe that Saavyas will be
          the perfect festival to bring both technology and culture
          together on one platform.
      </Typography>
      </Grid>
    </Grid>
  );
}

function ContactUs(props) {
  const { classes, contactDetails } = props;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <MoreInfoTitle classes={classes} title="Contact Us" />
      </Grid>
      <Grid item container alignItems="space-around">
        {Object.entries(contactDetails).map((contact, index) => (
          <Grid item container direction="column" xs={4} key={index}>
            <Grid item>
              <Typography
                display="inline"
                variant="body1"
                align="center"
                className={classes.titleColor1}
              >
                {contact[0]}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                display="inline"
                variant="body1"
                align="center"
                className={classes.titleColor2}
              >
                {contact[1]}
              </Typography>
            </Grid>
          </Grid>))}
      </Grid>
    </Grid>
  );
}

function FindUs(props) {
  const { classes } = props;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <MoreInfoTitle classes={classes} title="Find Us" />
      </Grid>
      <Grid item container>
        <Grid item xs={10} sm='auto'>
          <Typography variant="body1" className={classes.titleColor2}>
            National Institute of Technology Goa
        </Typography>
          <Typography variant="body1" className={classes.titleColor2}>
            Farmagudi, Ponda
        </Typography>
          <Typography variant="body1" className={classes.titleColor2}>
            Goa - 403401
        </Typography>
        </Grid>
        <Grid item xs={2} sm='auto'>
          <a
            href="https://goo.gl/maps/s4iauzvopmvQ3io67"
            target="_blank"
            rel="noopener noreferrer">
            <IconButton>
              <LocateIcon fontSize="large" className={classes.locateIconColor} />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ComingSoon
