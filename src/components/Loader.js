import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles(theme => ({
  root: props => ({
    background: props.bgColor,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  icon: props => ({
    color: props.iconColor,
  }),
}))

function Loader(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <CircularProgress size={props.size} className={classes.icon} />
    </div>
  )
}

export default Loader
