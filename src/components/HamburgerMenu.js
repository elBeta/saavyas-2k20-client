import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Dialog from "@material-ui/core/Dialog"
import Fade from "@material-ui/core/Fade"
import Slide from "@material-ui/core/Slide"

import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"

import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  // return <Fade in ref={ref} {...props} />
  return <Slide direction="up" ref={ref} {...props} />
})

function HamburgerMenu(props) {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleMenuClick = e => {
    setOpen(true)
  }

  const handleClose = e => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton color="primary" onClick={handleMenuClick}>
        <MenuIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted={true}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Meet the Team" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Registration" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Campus Ambassador" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Gallery" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sponsors" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

export default HamburgerMenu
