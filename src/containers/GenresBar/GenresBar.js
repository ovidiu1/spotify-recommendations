import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import {  withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorComponent from '../../components/Error/ErrorComponent';
import MediaCard from '../../components/Crads/MediaCard';
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
    this.getData();
  }

  getData = () => {
    const token = process.env.ACCESS_TOKEN
    const config = {
      headers: { 'Authorization': "Bearer " + token }
    }

    const endPoint = 'https://api.spotify.com/v1/recommendations';
    const limit = 18;
    let link = `${endPoint}?limit=${limit}&seed_genres=${this.state.value}`;
    console.info(link);

    axios.get(link, config) 
    .then(result => this.setState({
      tracks: result.data.tracks,
      isLoading: false
    }))
    .catch(error => this.setState({
      error: true,
      isLoading: false
    }));
  }

  getGenres = () => {
    const token = '';
    
    const config = {
        headers: { 'Authorization': "Bearer " + token }
      }
    const endPoint = 'https://api.spotify.com/v1/recommendations/available-genre-seeds'

    axios.get(endPoint, config)
        .then(result => this.setState({
            genres: result.data.genres,
            isLoading: false

        }))
        .catch(error => this.setState({
            error: true,
            isLoading: false
        }));
}

  handleChange = (event, value) => {
    this.setState({ value },() => {
      this.getData();
    })
  };

    render() {
      const { classes } = this.props;
      const { value, tracks, isLoading, error } = this.state;
      console.info('track', tracks);
      console.info('Genres',value);
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
