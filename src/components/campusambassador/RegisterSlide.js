import React from "react"
import {
  responsiveFontSizes,
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const theme = responsiveFontSizes(createMuiTheme())
theme.typography.body1 = {
  fontSize: "1rem",
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem",
  },
}

const useStyles = makeStyles(theme => ({
  root: {
    background: "#5cdb95",
  },
  contactUsContainer: {
    background: "#5cdb95",
    padding: "2rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "calc(64px + 2rem)",
    },
  },
  contactUsTitle: {
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 700,
    borderBottom: "8px solid #379683",
    [theme.breakpoints.up("md")]: {
      lineHeight: 1.5,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "4rem",
    },
  },
  contactUsTitleColorA: {
    color: "#05386b",
  },
  contactUsTitleColorB: {
    color: "#edf5e1",
  },
  contactInfoContainer: {
    paddingTop: "2rem",
  },
  contactInfoText: {
    fontFamily: "Barlow Condensed",
    fontWeight: 700,
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "2.25rem",
    // },
  },
  contactInfoName: {
    color: "#05386b",
  },
  contactInfoNumber: {
    color: "#edf5e1",
  },
  registerHereContainer: {
    background: "#e4ef40",
    padding: "2rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "calc(64px + 2rem)",
    },
  },
  registerHereText: {
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 700,
    [theme.breakpoints.only("md")]: {
      fontSize: "4rem",
    },
  },
  registerHereTextA: {
    color: "#05386b",
    paddingBottom: "2rem",
  },
  registerHereTextB: {
    color: "white",
    background: "#05386b",
  },
  termsContainer: {
    background: "#05386b",
    padding: "2rem",
  },
  termsTitle: {
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  termsTitleA: {
    color: "#5cdb95",
  },
  termsTitleB: {
    color: "#edf5e1",
  },
  termsContent: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "#edf5e1",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "1rem",
    // },
  },
  termsTag: {
    fontFamily: "Barlow",
    fontWeight: 700,
    fontSize: "1.25rem",
  },
  centerBelowMD: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}))

function RegisterSlide(props) {
  const classes = useStyles()
  const contactInfo = [
    {
      name: "ARCHIT",
      number: "8708049718",
    },
    {
      name: "RICHA",
      number: "9767948259",
    },
    {
      name: "RAKESH",
      number: "8618140288",
    },
  ]
  const registerLink = "https://forms.gle/h8zawnVQqbL8tgUp6"

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Grid
          container
          direction="column"
          item
          xs={12}
          md={8}
          className={classes.contactUsContainer}
        >
          <Grid item>
            <Typography
              variant="h1"
              display="inline"
              className={[classes.contactUsTitle, classes.contactUsTitleColorA]}
            >
              CONTACT{" "}
            </Typography>
            <Typography
              variant="h1"
              display="inline"
              className={[classes.contactUsTitle, classes.contactUsTitleColorB]}
            >
              US
            </Typography>
          </Grid>
          <Grid
            container
            spacing={4}
            item
            className={classes.contactInfoContainer}
          >
            {contactInfo.map(contactItem => (
              <Grid container direction="column" item xs={12} sm={3}>
                <Grid item>
                  <Typography
                    variant="h3"
                    className={[
                      classes.contactInfoText,
                      classes.contactInfoName,
                    ]}
                  >
                    {contactItem.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h4"
                    className={[
                      classes.contactInfoText,
                      classes.contactInfoNumber,
                    ]}
                  >
                    {contactItem.number}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          item
          xs={12}
          md={4}
          className={classes.registerHereContainer}
        >
          <Grid item>
            <Typography
              variant="h1"
              className={[classes.registerHereText, classes.registerHereTextA]}
            >
              REGISTER
            </Typography>
          </Grid>
          <Grid item>
            <a href={registerLink} rel="noopener noreferrer" target="_blank">
              <Typography
                variant="h1"
                className={[
                  classes.registerHereText,
                  classes.registerHereTextB,
                ]}
              >
                HERE
              </Typography>
            </a>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          item
          xs={12}
          className={classes.termsContainer}
        >
          <Grid item>
            <Typography
              variant="h1"
              display="inline"
              className={[classes.termsTitle, classes.termsTitleA]}
            >
              TERMS{" "}
            </Typography>
            <Typography
              variant="h1"
              display="inline"
              className={[classes.termsTitle, classes.termsTitleB]}
            >
              &amp;{" "}
            </Typography>
            <Typography
              variant="h1"
              display="inline"
              className={[classes.termsTitle, classes.termsTitleA]}
            >
              CONDITIONS
            </Typography>
          </Grid>
          <Grid item>
            <ol>
              <li className={`${classes.termsTag} ${classes.termsTitleA}`}>
                <Typography variant="h6" className={classes.termsContent}>
                  The Campus Ambassador program is only for college students and
                  a valid college ID is enough to apply
                </Typography>
              </li>
              <li className={`${classes.termsTag} ${classes.termsTitleA}`}>
                <Typography variant="h6" className={classes.termsContent}>
                  You are expected to put in 1-2 hours a week
                </Typography>
              </li>
              <li className={`${classes.termsTag} ${classes.termsTitleA}`}>
                <Typography variant="h6" className={classes.termsContent}>
                  **A Campus Ambassador is entitled to give free Saavyas
                  Merchandise, only if he/she manages to sell 10 or more
                  T-Shirts/Hoodies in their college.
                </Typography>
              </li>
              <li className={`${classes.termsTag} ${classes.termsTitleA}`}>
                <Typography variant="h6" className={classes.termsContent}>
                  CA Program is applicable till the completion of the Saavyas'20
                  fest
                </Typography>
              </li>
            </ol>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default RegisterSlide
