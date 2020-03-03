import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

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
  mainSection: {
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
  rulesSection: {
    paddingTop: "3rem",
  },
  rulesSectionTitleHolder: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "1rem",
  },
  rulesTitleA: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "#F7EDE1",
    paddingRight: "0.75rem",
  },
  rulesTitleB: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "#D7595D",
  },
  titleA: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "#F7EDE1",
  },
  tableHeadCell: {
    background: "#D7595D",
    color: "#F7EDE1",
    fontWeight: 700,
  },
  bulletsHolder: {
    paddingLeft: "0.5rem",
    color: "#F7EDE1",
    fontFamily: "Barlow",
    fontWeight: 600,
    fontSize: "0.95rem",
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
            <Grid item xs={12} sm={5}>
              <Title classes={classes} />
            </Grid>
            <Grid container item xs={12} sm={7} className={classes.mainSection}>
              <Grid item xs={12}>
                <Prize classes={classes} />
              </Grid>
              <Grid item xs={12}>
                <RegFee classes={classes} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <MidSection classes={classes} />
            </Grid>
            <Grid item xs={12}>
              <RulesSection classes={classes} />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  )
}

function Title(props) {
  const { classes } = props

  return (
    <Grid container className={classes.titleHolder}>
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
  )
}

function Prize(props) {
  const { classes } = props

  return (
    <Grid container className={classes.prizeHolder}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" className={classes.titleCTypo}>
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
  )
}

function RegFee(props) {
  const { classes } = props

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" className={classes.titleCTypo}>
          REGISTRATION FEE
        </Typography>
      </Grid>
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
  )
}

function MidSection(props) {
  const { classes } = props

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      item
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
  )
}

function RulesSection(props) {
  const { classes } = props

  return (
    <Grid container className={classes.rulesSection}>
      <Grid item xs={12} className={classes.rulesSectionTitleHolder}>
        <Typography
          variant="h2"
          display="inline"
          className={classes.rulesTitleA}
        >
          Important
        </Typography>
        <Typography
          variant="h2"
          display="inline"
          className={classes.rulesTitleB}
        >
          Rules
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} style={{ paddingBottom: "0.5rem" }}>
          <Typography variant="h6" display="inline" className={classes.titleA}>
            Event Class:{" "}
          </Typography>
          <Typography display="inline" className={classes.titleA}>
            Ace, King and Queen
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PointsTable classes={classes} />
        </Grid>
        <Grid item xs={12}>
          <RulesList classes={classes} />
        </Grid>
      </Grid>
    </Grid>
  )
}

function RulesList(props) {
  const { classes } = props

  return (
    <ul className={classes.bulletsHolder}>
      <li>
        Individual participation is allowed in all College Trophy Events with
        Fees as per Individual Entry Fee mentioned in the Poster
      </li>
      <li>
        There will be one overall Winner between individual participants and
        college trophy participants who will win the event prize money
      </li>
      <li>Point system is applicable for college trophy participants</li>
      <li>
        Only one participant/team per event is allowed for college trophy
        participation. For more Registrations, the other participant/team can
        register as Individual Participants
      </li>
      <li>
        Ranking of the colleges for College Trophy Participation will be done
        separately
      </li>
      <li>
        For Example - Consider 3 college participation and 2 individual
        participation
      </li>
      <li>
        If final ranking is:
        <ol>
          <li>Individual A (Overall Winner) (Wins Prize Money)</li>
          <li>College B</li>
          <li>Individual B</li>
          <li>College B</li>
          <li>College C</li>
        </ol>
      </li>
      <li>
        Then, Ranking for College Trophy Participation:
        <ol>
          <li>College A (Points based on Points Table for 1st Position)</li>
          <li>College B (Points based on Points Table for 2nd Position)</li>
          <li>College C (Points based on Points Table for 3rd Position)</li>
        </ol>
      </li>
    </ul>
  )
}

function StyledCell(props) {
  const { children, ...otherProps } = props
  return (
    <TableCell
      {...otherProps}
      style={{
        color: "#F7EDE1",
        borderBottom: "1px solid #F7EDE1",
        fontWeight: 700,
      }}
    >
      {children}
    </TableCell>
  )
}

function PointsTable(props) {
  const { classes } = props

  return (
    <Table>
      <TableHead>
        <TableRow>
          <StyledCell className={classes.tableHeadCell}>
            College Position
          </StyledCell>
          <StyledCell className={classes.tableHeadCell}>Ace</StyledCell>
          <StyledCell className={classes.tableHeadCell}>King</StyledCell>
          <StyledCell className={classes.tableHeadCell}>Queen</StyledCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <StyledCell>1st</StyledCell>
          <StyledCell>2000</StyledCell>
          <StyledCell>1500</StyledCell>
          <StyledCell>1200</StyledCell>
        </TableRow>
        <TableRow>
          <StyledCell>2nd</StyledCell>
          <StyledCell>1500</StyledCell>
          <StyledCell>1200</StyledCell>
          <StyledCell>900</StyledCell>
        </TableRow>
        <TableRow>
          <StyledCell>3rd</StyledCell>
          <StyledCell>1200</StyledCell>
          <StyledCell>1000</StyledCell>
          <StyledCell>600</StyledCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default CollegeTrophy
