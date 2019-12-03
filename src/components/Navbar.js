import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Appbar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import { Link, useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  link: {
    color: "white",
    textDecoration: "solid",
  },
  activeLink: {},
}))

function Navbar(props) {
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

  return (
    <Appbar>
      <Toolbar>
        <Grid container justify="space-around">
          <Grid container justify="space-around" item xs={12}>
            {menuOtherLinks.map(linkItem => (
              <Grid item key={linkItem.name}>
                <Link
                  to={linkItem.link}
                  className={classes.link}
                  activeClassName={classes.activeLink}
                  partiallyActive={true}
                >
                  <Typography variant="h5">{linkItem.name}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid container justify="space-around" item xs={12}>
            {menuMainLinks.map(linkItem => (
              <Grid item key={linkItem.name}>
                <Link
                  to={linkItem.link}
                  className={classes.link}
                  activeClassName={classes.activeLink}
                  partiallyActive={true}
                >
                  <Typography variant="h6">{linkItem.name}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </Appbar>
  )
}

export default Navbar
