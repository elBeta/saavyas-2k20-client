import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Dialog from "@material-ui/core/Dialog"
// import Fade from "@material-ui/core/Fade"
import Slide from "@material-ui/core/Slide"

import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
// import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"

import MenuIcon from "@material-ui/icons/Menu"

import { Link, useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  link: {
    color: "black",
    textDecoration: "solid",
  },
  activeLink: {},
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  // return <Fade in ref={ref} {...props} />
  return <Slide direction="up" ref={ref} {...props} />
})

function HamburgerMenu(props) {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const navData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuOtherLinks {
            link
            name
          }
          menuMainLinks {
            link
            name
          }
        }
      }
    }
  `)

  const { menuMainLinks, menuOtherLinks } = navData.site.siteMetadata

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
          {menuMainLinks.map(linkItem => (
            <ListItem button key={linkItem.name}>
              <Link
                to={linkItem.link}
                className={classes.link}
                activeClassName={classes.activeLink}
                partiallyActive={true}
              >
                <ListItemText primary={linkItem.name} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuOtherLinks.map(linkItem => (
            <ListItem button key={linkItem.name}>
              <Link
                to={linkItem.link}
                className={classes.link}
                activeClassName={classes.activeLink}
                partiallyActive={true}
              >
                <ListItemText primary={linkItem.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  )
}

export default HamburgerMenu
