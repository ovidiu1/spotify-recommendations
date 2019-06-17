import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { connect } from 'react-redux'
import { selectedGenres } from '../../actions'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  wrapper: {
    padding: '50px'
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const GenresBar = ({ dispatch }) => {
  const [value, setValue] = React.useState('heavy-metal');

  function handleChange(event, newValue) {
    setValue(newValue);
    dispatch(selectedGenres(newValue));
  }
  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Rock" value='heavy-metal' />
          <Tab label="House" value='deep-house' />
          <Tab label="Drum and Base" value='drum-and-bass' />
          <Tab label="Electro" value='electro' />
          <Tab label="Pop" value='pop' />
          <Tab label="Hip Hop" value='hip-hop' />
        </Tabs>
      </AppBar>
    </div>
  )
}

export default connect()(GenresBar);
withStyles(styles)(GenresBar);