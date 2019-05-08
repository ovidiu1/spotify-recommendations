import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import {  withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from 'axios';

const styles = theme  => ({
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

class GenresBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      genres: 'heavy-metal'
    }
  }
  
  componentDidMount() {

  }
  
  handleChange = (event, value) => {
    this.setState({ value });
    console.log('genres Selected:', value)
    console.log('GenrerBAR')

    this.props.callbackFromParent(value);
    };

    render() {
      const { genres } = this.state;
    return (
      <div>
      <AppBar position="static" color="default">
          <Tabs
            value={genres}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Rock" value='heavy-metal' />
            <Tab label="House" value='deep-house' />
            <Tab label="Drum and Base" value='drum-and-bass' />
            <Tab label="Electro" value='electro'/>
            <Tab label="Pop" value='pop'/>
            <Tab label="Hip Hop" value='hip-hop'/>
          </Tabs>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(GenresBar)
