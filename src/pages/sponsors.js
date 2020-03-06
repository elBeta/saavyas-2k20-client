import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import FluidImage from "../components/image"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    width: "100%",
  },
  photoHolder: {
    display: "flex",
    justifyContent: "center",
    padding: "0.5rem 0 2rem 0",
  },
  presentsTypo: {
    fontFamily: "Kaushan Script",
    fontWeight: 700,
  },
  poweredTypo: {
    fontFamily: "Barlow",
    fontWeight: 700,
  },
  photoHolder2: {
    padding: "2rem",
  },
}))

function Sponsors(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly">
        <Grid item xs={12} className={classes.photoHolder}>
          <FluidImage fileName="nit-goa-logo.png" style={{ width: "7rem" }} />
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <FluidImage
            fileName="canara-bank-logo-2.png"
            style={{ width: "23rem" }}
          />
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <Typography variant="h2" className={classes.presentsTypo}>
            Presents...
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <FluidImage
            fileName="saavyas-black-text.png"
            style={{ width: "20rem" }}
          />
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <FluidImage fileName="saavyas_logo.png" style={{ width: "10rem" }} />
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <FluidImage
            fileName="saavyas-tagline.png"
            style={{ width: "15rem" }}
          />
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <Typography variant="h3" className={classes.poweredTypo}>
            POWERED BY
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <FluidImage
            fileName="mastersoft-logo.png"
            style={{ width: "20rem" }}
          />
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <Typography variant="h5" className={classes.poweredTypo}>
            BROUGHT TO YOU BY
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <FluidImage
            fileName="rockvalley-goa.png"
            style={{ width: "20rem" }}
          />
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <Typography variant="h5" className={classes.poweredTypo}>
            IN ASSOCIATION WITH
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.photoHolder}
          style={{ paddingBottom: 0 }}
        >
          <FluidImage
            fileName="corporation-bank-logo.webp"
            style={{ width: "20rem" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.photoHolder}
          style={{ paddingTop: 0 }}
        >
          <Typography variant="h5" className={classes.poweredTypo}>
            (Banking Partner)
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <FluidImage fileName="growth-gravy.png" style={{ width: "20rem" }} />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="sbi.png"
            style={{ width: "10rem", height: "10rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="cottons-daily.png"
            style={{ width: "10rem", height: "10rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="nandanvan.png"
            style={{ width: "10rem", height: "10rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage fileName="more-sponsors.png" style={{ width: "20rem" }} />
        </Grid>
        <Grid item xs={12} className={classes.photoHolder}>
          <Typography variant="h5" className={classes.poweredTypo}>
            GENERAL SPONSORS
          </Typography>
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="r2mi.png"
            style={{ width: "30rem", height: "10rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="goa-shipyard.png"
            style={{ width: "10rem", height: "12rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="gamma-asha.png"
            style={{ width: "30rem", height: "12rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="some-sponsor.png"
            style={{ width: "10rem", height: "10rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="coaching-contractor.png"
            style={{ width: "40rem", height: "12rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="adani.png"
            style={{ width: "20rem", height: "10rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="entuple.png"
            style={{ width: "25rem", height: "10rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="pragna.png"
            style={{ width: "10rem", height: "10rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="suma.png"
            style={{ width: "25rem", height: "10rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="cremeux.png"
            style={{ width: "25rem", height: "10rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="zuari.png"
            style={{ width: "25rem", height: "12rem" }}
          />
        </Grid>
        <Grid item className={classes.photoHolder2}>
          <FluidImage
            fileName="health-mate.png"
            style={{ width: "25rem", height: "12rem" }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Sponsors
