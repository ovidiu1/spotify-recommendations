import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import GenresBar from './containers/GenresBar/GenresBar'

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorComponent from './components/Error/ErrorComponent';
import MediaCard from './components/Crads/MediaCard';
import axios from 'axios';

import './App.css'

const theme  = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
  },
  })
const progress = {
  margin: theme.spacing.unit * 2,
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'heavy-metal',
      tracks: [],
      genres: null,
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getData();
  }

  getData = () => {
    const token = 'BQCZ5XSVuKUfPKQ0U83VnpSMF6jMMZ--YwMnMmWQTEiF5ZrCUN7oGo6qZA277B1wZdqQ4v_WtHcusRmznYkdktimfBzDXLUZXZsZvOnskkal6XaReS-H2nIscHVLf9yZyq0UNKauCxZHY9akUGPrsVUzRGn1sXclm0cPfGWOhrU3o2CU-bwh09mo0nwCeCOXsao';
    const config = {
      headers: { 'Authorization': "Bearer " + token }
    }

    const endPoint = 'https://api.spotify.com/v1/recommendations';
    const limit = 18;
    let link = `${endPoint}?limit=${limit}&seed_genres=${this.state.value}`;
    
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
  
  myCallback = (value) => {
    this.setState({ value: value })
    // console.info("DATA from childa", value)
    console.info('state', this.state.value)
    this.getData()
  }

  render() {
    const { classes } = this.props;
    const { value, tracks, isLoading, error } = this.state;
    return (
      <>
      <MuiThemeProvider theme={theme}>
      <GenresBar callbackFromParent={this.myCallback}></ GenresBar>
      <Grid container
        className='wrapper'
        spacing={16}
        direction='row'
        alignItems='center'
        justify='center'>
        {isLoading ? <CircularProgress className="progress" /> : ''}
        { error ? <ErrorComponent /> : '' }
         <MediaCard tracks={tracks}></MediaCard>
        </ Grid>
      </MuiThemeProvider>
      </>
    );
  }
}

export default App
