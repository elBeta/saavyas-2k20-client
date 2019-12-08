import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"

import publiciseIcon from "../../assets/images/campus-ambassador/publicise.svg"
import coordinateIcon from "../../assets/images/campus-ambassador/coordinate.svg"
import socialMediaIcon from "../../assets/images/campus-ambassador/social-media.svg"
import tasksIcon from "../../assets/images/campus-ambassador/tasks.svg"
import spokespersonIcon from "../../assets/images/campus-ambassador/spokesperson.svg"

const useStyles = makeStyles(theme => ({
  slideRoot: {
    // height: "100%",
    // width: "100%",
    background: "linear-gradient(135deg, #dd1173, #350e47)",
  },
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  slideTitle: {
    fontFamily: "Barlow",
    color: "white",
    paddingTop: "1rem",
    paddingBottom: "5rem",
    [theme.breakpoints.only("xs")]: {
      paddingBottom: "2rem",
      fontSize: "2.5rem",
    },
    fontWeight: 700,
  },
  cardRoot: {
    padding: "1rem",
    height: "100%",
  },
  cardIcon: {
    width: "3rem",
    height: "3rem",
  },
  cardTitleTypo: {
    fontFamily: "Barlow",
    fontWeight: 700,
    color: "black",
  },
  cardContentTypo: {
    fontFamily: "Barlow",
    fontWeight: 400,
    color: "black",
  },
  offset: theme.mixins.toolbar,
}))

function ResponsibilitiesSlide(props) {
  const classes = useStyles()

  return (
    <>
      <Grid container direction="column" className={classes.slideRoot}>
        <Grid item className={classes.offset} />
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            className={classes.slideTitle}
          >
            What are your responsibilites?
          </Typography>
        </Grid>
        <Grid item>
          <Cards classes={classes} />
        </Grid>
      </Grid>
    </>
  )
}

function Cards(props) {
  const { classes } = props
  const data = [
    {
      title: "PUBLICISE",
      icon: publiciseIcon,
      content: "Publicise our events in your college via different means",
    },
    {
      title: "COORDINATE",
      icon: coordinateIcon,
      content:
        "Coordinate with us and help us organize workshops in your college",
    },
    {
      title: "SOCIAL MEDIA",
      icon: socialMediaIcon,
      content:
        "Publicise Saavyas in your college using the different social networking platforms",
    },
    {
      title: "TASKS",
      icon: tasksIcon,
      content:
        "Tasks that are assigned to you must be completed before the deadline with us and help us organize workshops in your college",
    },
    {
      title: "SPOKESPERSON",
      icon: spokespersonIcon,
      content: "Representative and point of contact from your college",
    },
  ]
  return (
    <div style={{ padding: 16 }}>
      <Grid container spacing={4} justify="center">
        {data.map(dataItem => (
          <Grid item key={dataItem.title} xs={12} sm={4}>
            <Card square={true} className={classes.cardRoot}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <img src={dataItem.icon} className={classes.cardIcon} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" className={classes.cardTitleTypo}>
                    {dataItem.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.cardContentTypo}
                    align="center"
                  >
                    {dataItem.content}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ResponsibilitiesSlide
