import React from "react"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

import FluidImage from "../../components/image"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
  },
  categoryContainer: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
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
  fluidImage: {
    height: "100%",
    width: "100%",
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
      fontSize: "1.75rem",
    },
  },
}))

function useWidth() {
  const theme = useTheme()
  const keys = [...theme.breakpoints.keys].reverse()
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || "xs"
  )
}

function CategorySelector(props) {
  const classes = useStyles()
  const { categories } = props
  const mobileMode = ["xs"].includes(useWidth())

  return (
    <Grid
      container
      direction={mobileMode ? "column" : "row"}
      wrap={mobileMode ? "nowrap" : "wrap"}
      className={classes.root}
    >
      {categories.map(category => (
        <Grid
          item
          xs="auto"
          sm={(categories.length > 3 ? 24 : 12) / categories.length}
          className={classes.categoryContainer}
        >
          <Link to={category.link}>
            <div className={classes.imageContainer}>
              <FluidImage
                fileName={category.fileName}
                className={classes.fluidImage}
              />
            </div>
            <div className={classes.overlay}></div>
            <div className={classes.categoryTitle}>
              <Typography variant="h2" className={classes.titleTypo}>
                {category.title}
              </Typography>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default CategorySelector
