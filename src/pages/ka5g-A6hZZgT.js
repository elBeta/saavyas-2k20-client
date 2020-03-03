import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import Amplify, { API } from "aws-amplify"
import awsconfig from "../aws-exports"
import Loader from "../components/Loader"

import { forwardRef } from "react"

import AddBox from "@material-ui/icons/AddBox"
import ArrowDownward from "@material-ui/icons/ArrowDownward"
import Check from "@material-ui/icons/Check"
import ChevronLeft from "@material-ui/icons/ChevronLeft"
import ChevronRight from "@material-ui/icons/ChevronRight"
import Clear from "@material-ui/icons/Clear"
import DeleteOutline from "@material-ui/icons/DeleteOutline"
import Edit from "@material-ui/icons/Edit"
import FilterList from "@material-ui/icons/FilterList"
import FirstPage from "@material-ui/icons/FirstPage"
import LastPage from "@material-ui/icons/LastPage"
import Remove from "@material-ui/icons/Remove"
import SaveAlt from "@material-ui/icons/SaveAlt"
import Search from "@material-ui/icons/Search"
import ViewColumn from "@material-ui/icons/ViewColumn"

import MaterialTable from "material-table"

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

// ka5g-A6hZZgT

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100%",
    padding: "5rem 10rem",
  },
  titleHolder: {
    paddingBottom: "3rem",
  },
  titleA: {
    color: "#B4B1C9",
    fontWeight: 700,
  },
  titleB: {
    color: "#3B3460",
    fontWeight: 700,
  },
  titleUnderline: {
    height: "6px",
    width: "100%",
    background: "#703BE2",
  },
}))

function EntriesPage(props) {
  const classes = useStyles()
  const [eventDetails, setEventDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    Amplify.configure(awsconfig)
    API.get("eventEntriesFetchAPI", "/fetch-event-entries")
      .then(items => {
        setEventDetails(JSON.parse(items))
      })
      .catch(err => {
        console.error(err.response.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item className={classes.titleHolder}>
          <Grid item xs={12}>
            <Typography variant="h1" className={classes.titleA}>
              Event
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" className={classes.titleB}>
              Entries
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.titleUnderline} />
          </Grid>
        </Grid>

        <Grid container item>
          <Grid item xs={12}>
            {isLoading ? (
              <Loader
                iconColor="#703BE2"
                style={{ paddingTop: "2rem", height: "auto" }}
              />
            ) : (
              <MaterialTable
                title="Entries"
                icons={tableIcons}
                columns={[
                  { title: "Name", field: "name" },
                  { title: "Event", field: "event" },
                ]}
                data={[
                  { name: "Piyush", event: "csgo" },
                  { name: "Ayush", event: "drone-prix" },
                ]}
                options={{
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: "#F6F5FA",
                    borderBottom: "4px solid #703BE2",
                    fontWeight: 700,
                  },
                  // rowStyle: {
                  //   backgroundColor: "#F6F5FA",
                  // },
                }}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default EntriesPage
