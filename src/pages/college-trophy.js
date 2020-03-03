import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

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
  },
  mainA: {
    paddingLeft: "5rem",
    borderLeft: "8px solid #D7595D",
  },
  prizeHolder: {
    paddingBottom: "2rem",
  },
  prizeMoneyTypo: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "#F7EDE1",
    paddingBottom: "0.5rem",
  },
  prizeValueTypo: {
    fontFamily: "Kaushan Script",
    fontWeight: 700,
    color: "#F7EDE1",
    paddingLeft: "5rem",
  },
  titleATypo: {
    fontFamily: "Barlow",
    color: "#F7EDE1",
    fontWeight: 700,
    alignSelf: "flex-end",
  },
  titleBTypo: {
    fontFamily: "Barlow",
    color: "#D7595D",
    fontWeight: 700,
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
            <Grid container item xs={5}>
              <Grid item xs={12}>
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
            <Grid container item xs={7} className={classes.mainA}>
              <Grid container item xs={12} className={classes.prizeHolder}>
                <Grid item xs={12}>
                  <Typography variant="h3" className={classes.prizeMoneyTypo}>
                    Prize Money:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2" className={classes.prizeValueTypo}>
                    Rs 55,000
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.prizeMoneyTypo}>
                  Registration Fee:
                </Typography>
              </Grid>
              <Grid container item xs={12}>
                <Grid container item xs={5}>
                  <Grid item xs={12}>
                    <Typography
                      display="inline"
                      variant="h2"
                      className={classes.prizeValueTypo}
                    >
                      Rs 1500
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      display="inline"
                      variant="h5"
                      className={classes.prizeValueTypo}
                    >
                      before 5th March
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Typography
                    display="inline"
                    variant="h2"
                    className={classes.prizeValueTypo}
                  >
                    &
                  </Typography>
                </Grid>
                <Grid container item xs={5}>
                  <Grid item xs={12}>
                    <Typography
                      display="inline"
                      variant="h2"
                      className={classes.prizeValueTypo}
                    >
                      Rs 2000
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      display="inline"
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
          </Grid>
        </div>
      </ThemeProvider>
    </>
  )
}

export default CollegeTrophy
