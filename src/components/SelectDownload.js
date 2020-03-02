import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

import DownloadIcon from "@material-ui/icons/GetApp"

const useStyles = makeStyles(theme => ({
  root: {
    border: "1px solid white",
    padding: "2.5px 15px",
  },
  selectRoot: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: "0.875rem",
  },
  selectIcon: {
    fill: "white",
  },
  downloadIcon: {
    fill: "white",
  },
  downloadIconHolder: {
    padding: 0,
  },
}))

function SelectDownload(props) {
  const { items } = props
  const classes = useStyles()
  const [index, setIndex] = useState(0)

  const handleChange = e => {
    setIndex(e.target.value)
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid item>
        <Select
          value={index}
          onChange={handleChange}
          placeholder="Rulebooks"
          disableUnderline
          className={classes.selectRoot}
          classes={{ icon: classes.selectIcon }}
        >
          {items.map((item, i) => (
            <MenuItem value={i} key={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item>
        <a href={items[index].link} target="_blank" rel="noopener noreferrer">
          <IconButton
            disableTouchRipple
            disableFocusRipple
            disableRipple
            className={classes.downloadIconHolder}
          >
            <DownloadIcon className={classes.downloadIcon} />
          </IconButton>
        </a>
      </Grid>
    </Grid>
  )
}

export default SelectDownload
