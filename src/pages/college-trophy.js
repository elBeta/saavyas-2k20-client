import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles"

let theme = responsiveFontSizes(createMuiTheme())

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#392E3F",
    padding: "5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "3rem",
    },
  },
  mainA: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "5rem",
      borderLeft: "8px solid #D7595D",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "2rem",
    },
  },
  prizeHolder: {
    paddingBottom: "2rem",
  },
  titleCTypo: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "#D7595D",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
  },
  prizeValueTypo: {
    fontFamily: "Kaushan Script",
    fontWeight: 700,
    color: "#F7EDE1",
  },
  titleHolder: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "0.5rem",
      borderBottom: "6px solid #D7595D",
    },
  },
  titleAHolder: {
    alignSelf: "flex-end",
  },
  titleATypo: {
    fontFamily: "Barlow",
    color: "#F7EDE1",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  titleBTypo: {
    fontFamily: "Barlow",
    color: "#D7595D",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  midSection: {
    paddingTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "2rem",
    },
  },
  halfMidLine: {
    height: "4px",
    margin: "0 2rem",
    backgroundColor: "#5B9DB5",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  clgRegBtn: {
    color: "#F7EDE1",
    background: "#D7595D",
    borderRadius: 0,
    fontWeight: 700,
    padding: "0.5rem",

    "&:hover": {
      background: "#974244",
    },
  },
}))

function CollegeTrophy(props) {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Grid container>
            <Grid container item xs={12} sm={5} className={classes.titleHolder}>
              <Grid item xs={12} className={classes.titleAHolder}>
                <Typography variant="h1" className={classes.titleATypo}>
                  Cultural
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h1" className={classes.titleBTypo}>
                  Trophy
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={7} className={classes.mainA}>
              <Grid container item xs={12} className={classes.prizeHolder}>
                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.titleCTypo}
                  >
                    PRIZE MONEY
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h2"
                    align="center"
                    className={classes.prizeValueTypo}
                  >
                    Rs 55,000
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.titleCTypo}
                >
                  REGISTRATION FEE
                </Typography>
              </Grid>
              <Grid container item xs={12}>
                <Grid container item xs={5}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h2"
                      align="center"
                      className={classes.prizeValueTypo}
                    >
                      Rs 1500
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      align="center"
                      className={classes.prizeValueTypo}
                    >
                      before 5th March
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Typography
                    variant="h2"
                    align="center"
                    className={classes.prizeValueTypo}
                  >
                    &
                  </Typography>
                </Grid>
                <Grid container item xs={5}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h2"
                      align="center"
                      className={classes.prizeValueTypo}
                    >
                      Rs 2000
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      align="center"
                      className={classes.prizeValueTypo}
                    >
                      After 5th March
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              item
              xs={12}
              className={classes.midSection}
            >
              <Grid item style={{ flexGrow: 1 }}>
                <div className={classes.halfMidLine} />
              </Grid>
              <Grid item>
                <a
                  href="https://drive.google.com/open?id=1ESRWQaHVm2bQN2jRyqMyR9lBihZvZxRv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.clgRegBtn}>
                    College Registration Form
                  </Button>
                </a>
              </Grid>
              <Grid item style={{ flexGrow: 1 }}>
                <div className={classes.halfMidLine} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  )
}

export default CollegeTrophy
