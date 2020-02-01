import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

import FluidImage from "../../components/image"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100vw",
  },
  categoryContainer: {
    position: "relative",
    height: "100%",
    width: "100%",
    border: "2px solid black",
    "&:hover": {
      "& $overlay": {
        opacity: 0.4,
      },
      "& $titleTypo": {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "1rem",
      },
    },
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.8,
  },
  categoryTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    color: "#fafafa",
  },
  titleTypo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
}))

function ImageCategorize(props) {
  const classes = useStyles()
  const images = [
    { title: "Technical", fileName: "tech", link: "/events/technical" },
    { title: "Cultural", fileName: "cultural", link: "/events/cultural" },
  ]

  return (
    <Grid container className={classes.root}>
      {images.map(image => (
        <Grid item xs={6} className={classes.categoryContainer}>
          <Link to={image.link}>
            <div className={classes.imageContainer}>
              <FluidImage
                fileName={image.fileName}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={classes.overlay}></div>
            <div className={classes.categoryTitle}>
              <Typography variant="h2" className={classes.titleTypo}>
                {image.title}
              </Typography>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default ImageCategorize
