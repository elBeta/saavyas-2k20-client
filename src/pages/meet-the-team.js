import React from "react"
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Fab from "@material-ui/core/Fab"
import IconButton from "@material-ui/core/IconButton"

import AccountIcon from "@material-ui/icons/AccountCircle"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import BackIcon from "@material-ui/icons/ArrowBack"
import UpIcon from "@material-ui/icons/ArrowUpward"

import { teamDetails } from "../details/teamDetails"
import { navigate } from "gatsby"

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#5cdb95",
    padding: "2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  title: {
    textTransform: "uppercase",
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "white",
    paddingBottom: "2rem",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "1rem",
    },
  },
  teamDetailsHolder: {
    padding: "2rem 0",
  },
  teamName: {
    textTransform: "uppercase",
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "#05386b",
  },
  emailId: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "white",
    paddingBottom: "1rem",
  },
  memberCardParent: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  contactCard: {
    // border: "2px solid #05386b",
  },
  cardHeader: {
    maxWidth: "max-content",
    paddingRight: "3rem",
    // paddingBottom: 4,
    // borderBottom: "2px solid #05386b",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "10rem",
    },
  },
  cardIconHolder: {
    paddingRight: "0.5rem",
    display: "flex",
    alignItems: "center",
  },
  cardIcon: {
    fill: "#05386b",
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  cardNameTypo: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "#edf5e1",
    textTransform: "uppercase",
  },
  detailsHolder: {
    paddingTop: "0.75rem",
  },
  backBtnIcon: {
    fill: "white",
    fontSize: "4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  fab: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
  },
}))

function useWidth() {
  const keys = [...theme.breakpoints.keys].reverse()
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || "xs"
  )
}

function MeetTheTeam(props) {
  const classes = useStyles()

  const mobileMode = ["xs"].includes(useWidth())

  const handleFabClick = e => {
    if (mobileMode) {
      navigate("/")
    } else {
      navigate("/meet-the-team#top")
    }
  }

  const handleBackClick = e => {
    navigate("/")
  }

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Fab color="primary" className={classes.fab} onClick={handleFabClick}>
          {mobileMode ? <BackIcon /> : <UpIcon />}
        </Fab>
        <div className={classes.root}>
          <Grid container>
            <Grid container alignItems="center" item xs={12}>
              {!mobileMode && (
                <Grid item>
                  <IconButton onClick={handleBackClick}>
                    <BackIcon className={classes.backBtnIcon} />
                  </IconButton>
                </Grid>
              )}
              <Grid item style={{ flexGrow: 1 }}>
                <Typography
                  variant="h1"
                  align="center"
                  id="top"
                  className={classes.title}
                >
                  {mobileMode ? "Meet The Team" : "#Meet-The-Team"}
                </Typography>
              </Grid>
            </Grid>
            {teamDetails.map(team => (
              <Grid
                container
                item
                xs={12}
                className={classes.teamDetailsHolder}
              >
                <Grid item xs={12}>
                  <Typography variant="h2" className={classes.teamName}>
                    {team.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" className={classes.emailId}>
                    {team.emailId}
                  </Typography>
                </Grid>
                <Grid container alignItems="center" item xs={12}>
                  {team.members.map(teamMember => (
                    <Grid
                      item
                      xs={12}
                      sm="auto"
                      className={classes.memberCardParent}
                    >
                      <ContactCard
                        classes={classes}
                        name={teamMember.name}
                        phoneNo={teamMember.phoneNo}
                        emailId={teamMember.emailId}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      </ThemeProvider>
    </>
  )
}

function ContactCard(props) {
  const { name, phoneNo, emailId, classes } = props

  return (
    <Grid container className={classes.contactCard}>
      <Grid
        container
        alignItems="center"
        item
        xs={12}
        className={classes.cardHeader}
      >
        <Grid item className={classes.cardIconHolder}>
          <AccountIcon className={classes.cardIcon} />
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.cardNameTypo}>
            {name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} className={classes.detailsHolder}>
        <Grid container item xs={12}>
          <Grid item className={classes.cardIconHolder}>
            <PhoneIcon className={classes.cardIcon} />
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.cardNameTypo}>
              {phoneNo}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default MeetTheTeam
