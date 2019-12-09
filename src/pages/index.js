import React, { useState } from "react"
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles"
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
import AccountIcon from "@material-ui/icons/AccountCircle"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"

import ImageSlideshow from "../components/ImageSlideshow"
import CountdownTimer from "../components/CountdownTimer"
import ShareButtons from "../components/ShareButtons"
import FluidImage from "../components/image"
import SEO from "../components/seo"

const theme = responsiveFontSizes(createMuiTheme())
theme.typography.body1 = {
  fontSize: "1rem",
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem",
  },
}

const useStyles = makeStyles({
  mainSection: {
    position: "relative",
    minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  comingSoonTypo: {
    fontFamily: "Montserrat, Roboto",
    color: "#ff0066",
    [theme.breakpoints.only("xs")]: {
      fontSize: "2.6rem",
    },
  },
  slidesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  slideshow: {
    height: "100%",
    zIndex: -2,
    backgroundColor: "black",
    opacity: 0.7,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,

    opacity: 0.6,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  centerAlign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainSectionArea: {
    padding: 24,
  },
  mainSectionInnerArea: {
    flexGrow: 1,
  },
  styledDivider: {
    backgroundColor: "white",
    height: 2,
  },
  saavyasLogo: {
    width: "20rem",

    [theme.breakpoints.down("xs")]: {
      width: "15rem",
    },
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
      <SEO title="Coming Soon" />
      <ThemeProvider theme={theme}>
        <div>
          <Grid container>
            <Grid item container xs={12} className={classes.mainSection}>
              <Grid item xs={12} className={classes.slidesContainer}>
                <div className={classes.overlay} />
                <ImageSlideshow className={classes.slideshow} />
              </Grid>
              <Grid
                item
                xs={12}
                container
                direction="column"
                className={classes.mainSectionArea}
              >
                <Grid item>
                  <IconButton
                    style={{ padding: 0 }}
                    onClick={handleMoreInfoClick}
                  >
                    <MenuIcon
                      style={{ fill: "white" }}
                      color="inherit"
                      fontSize="large"
                    />
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
                    <FluidImage
                      fileName="saavyas_logo_with_text.png"
                      className={classes.saavyasLogo}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      color="secondary"
                      variant="h1"
                      align="center"
                      className={classes.comingSoonTypo}
                    >
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
    maxHeight: "100%",
    maxWidth: "100%",
    padding: 24,
  },
  titleColor1: {
    color: "#0077c8",
  },
  titleColor2: {
    color: "#ffffff",
  },
  titleFont: {
    fontFamily: "Montserrat, Roboto",
  },
  locateIconColor: {
    fill: "#ff0066",
  },
  containerRoot: {
    height: "100%",
  },
  closeButton: {
    padding: 0,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeIn,
    }),
  },
  closeButtonOpen: {
    transform: "rotate(90deg)",
  },
  closeButtonClosed: {
    transform: "rotate(0deg)",
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
    width: "30%",
    [theme.breakpoints.only("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "60%",
    },
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
    width: "max-content",
    paddingRight: "5rem",
    [theme.breakpoints.only("xs")]: {
      paddingRight: "2rem",
    },
  },
  contactCardHeader: {
    width: "max-content",
    marginLeft: "-8px",
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
})

function MoreInfo(props) {
  const classes2 = useStyles2()
  // const contactDetails = {
  //   "Devanshi": "8550930424", "Damodar": "7798435097",
  //   "Nihal": "7902491495", "Aashay": "9881493681", "Vishal": "8698143452",
  // }
  const contactDetails = [
    {
      name: "Damodar Pai",
      title: "Core Team",
      email: "coreteam@saavyas.org",
      phoneNo: "7798435097",
    },
    {
      name: "Vikash Yadav",
      title: "Events Team",
      email: "events@saavyas.org",
      phoneNo: "8459778409",
    },
    {
      name: "Ashutosh Kabra",
      title: "Sponsorship Team",
      email: "sponsorship@saavyas.org",
      phoneNo: "7993659322",
    },
    {
      name: "Archit Garg",
      title: "Marketing Team",
      email: "publicity@saavyas.org",
      phoneNo: "8708049718",
    },
  ]

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
            <IconButton
              className={classes2.closeButton}
              onClick={props.handleClose}
            >
              <CloseIcon style={{ fill: "white" }} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="column"
            justify="space-between"
            className={classes2.mainArea}
            spacing={2}
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
  const { classes, title } = props
  const titleStart = title.split(" ")[0] + " "
  const titleEnd = title.split(" ")[1]

  return (
    <div className={classes.titleContainer}>
      <Typography
        display="inline"
        variant="h2"
        className={`${classes.titleColor1} ${classes.titleFont}`}
      >
        {titleStart}
      </Typography>
      <Typography
        display="inline"
        variant="h2"
        className={`${classes.titleColor2} ${classes.titleFont}`}
      >
        {titleEnd}
      </Typography>
    </div>
  )
}

function AboutUs(props) {
  const { classes } = props

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <MoreInfoTitle classes={classes} title="About Us" />
      </Grid>
      <Grid item>
        <Typography variant="body1" className={classes.titleColor2}>
          Saavyas '20 is to be the third edition of the annual inter-college
          techno-cultural fest of National Institute of Technology Goa. It will
          be a three-day event involving technical, music, arts, dance and drama
          enthusiasts from all over the country through competitions and
          performances. The name Saavyas finds its roots in a Sanskrit word
          meaning ‘bringing people together’. We believe that Saavyas will be
          the perfect festival to bring both technology and culture together on
          one platform.
        </Typography>
      </Grid>
    </Grid>
  )
}

function ContactUs(props) {
  const { classes, contactDetails } = props

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <MoreInfoTitle classes={classes} title="Contact Us" />
      </Grid>
      <Grid item container spacing={3} style={{ marginLeft: 4 }}>
        {contactDetails.map((contact, index) => (
          <Grid item xs={12} sm={3} key={index}>
            <ContactCard
              title={contact.title}
              name={contact.name}
              email={contact.email}
              phoneNo={contact.phoneNo}
              classes={{ contactCardHeader: classes.contactCardHeader }}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

function FindUs(props) {
  const { classes } = props

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <MoreInfoTitle classes={classes} title="Find Us" />
      </Grid>
      <Grid item container>
        <Grid item xs={10} sm="auto">
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
        <Grid item xs={2} sm="auto">
          <a
            href="https://goo.gl/maps/s4iauzvopmvQ3io67"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LocateIcon
                fontSize="large"
                className={classes.locateIconColor}
              />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Grid>
  )
}

function ContactCard(props) {
  const { title, name, phoneNo, email, classes } = props

  return (
    <Grid container direction="column" spacing={1}>
      <Grid
        item
        container
        className={classes.contactCardHeader}
        style={{ paddingRight: "3rem" }}
      >
        <Grid item>
          <AccountIcon style={{ fill: "white" }} fontSize="large" />
        </Grid>
        <Grid item style={{ paddingLeft: 10 }}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h5" style={{ color: "white" }}>
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ color: "white" }}>
                {name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item container spacing={2}>
          <Grid item>
            <EmailIcon fontSize="small" style={{ fill: "white" }} />
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{ color: "white" }}>
              {email}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <PhoneIcon fontSize="small" style={{ fill: "white" }} />
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{ color: "white" }}>
              {phoneNo}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ComingSoon
