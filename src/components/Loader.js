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
  const { size, bgColor, iconColor, ...otherProps } = props
  const classes = useStyles({ bgColor, iconColor })

  return (
    <div className={classes.root} {...otherProps}>
      <CircularProgress size={size} className={classes.icon} />
    </div>
  )
}

export default Loader
