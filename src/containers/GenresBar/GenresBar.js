import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import {  withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorComponent from '../../components/Error/ErrorComponent';
import MediaCard from '../../components/Crads/MediaCard';
import Cookies from 'js-cookie';
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

export class GenresBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'heavy-metal',
      tracks: [],
      isLoading: false,
      error: null
    }
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });
    if(this.state.error === true) {
      Cookies.set('isLogin', false);
    }
    this.getData();
  }

  getData = () => {

    function getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    axios.get('/callback') 
    .then(result => ( console.log(result.headers)))
    .catch(error => (console.log(error)));

    var params = getHashParams();
            var access_token = params.access_token,
            refresh_token = params.refresh_token,
            error = params.error;

    if (error) {
      alert('There was an error during the authentication');
    } else {
      if (access_token) {
        // render oauth info
          console.log('All good!');
      }
      const token = access_token;

    const config = {
      headers: { 'Authorization': "Bearer " + token }
    }

    const endPoint = 'https://api.spotify.com/v1/recommendations';
    const limit = 18;
    let link = `${endPoint}?limit=${limit}&seed_genres=${this.state.value}`;
    // console.info(link);

    axios.get(link, config) 
    .then(result => this.setState({
      tracks: result.data.tracks,
      isLoading: false
    }))
    .catch(error => this.setState({
      error: true,
      isLoading: false,
    }));
  }
}

  handleChange = (event, value) => {
    this.setState({ value },() => {
      this.getData();
    })
  };

    render() {
      const { classes } = this.props;
      const { value, tracks, isLoading, error } = this.state;

    return (
      <div>
      <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Rock" value='heavy-metal' />
            <Tab label="House" value="deep-house" />
            <Tab label="Drum and Base" value="drum-and-bass" />
            <Tab label="Electro" value="electro"/>
            <Tab label="Pop" value="pop"/>
            <Tab label="Hip Hop" value="hip-hop"/>
          </Tabs>

        </AppBar>
        <Grid container
        className={classes.wrapper}
        spacing={16}
        direction='row'
        alignItems='center'
        justify='center'>
        {isLoading ? <CircularProgress className={classes.progress} /> : ''}
        { error ? <ErrorComponent /> : '' }
         <MediaCard tracks={tracks}></MediaCard>
        </ Grid>
      </div>
    )
  }
}

export default withStyles(styles)(GenresBar)