import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from '../../components/TabContainer/TabContainer';
import MediaCard from '../../components/Crads/MediaCard';

import axios from 'axios';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const genres = [
  {
    id: 0,
    value: 'balck-metal',   
  },  
  {
    id: 1,
    value: 'deep-house',
  },
  {
    id: 2,
    value: 'drum-and-bass',
  },
  {
    id: 3,
    value: 'electro',
  }
]

export class GenresBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      seedGenres: '',
      tracks: [],
      isLoading: false,
      error: null
    }
  }
  
  getData = () => {
    const token = '';
    const config = {
      headers: { 'Authorization': "Bearer " + token }
    }

    const endPoint = 'https://api.spotify.com/v1/recommendations';
    const limit = 10;
    let link = `${endPoint}?limit=${limit}&seed_genres=${this.state.seedGenres}`;
    console.info(link);

    axios.get(link, config) 
    .then(result => this.setState({
      tracks: result.data.tracks,
    }))
    .catch(error => this.setState({
      error: true,
      isLoading: false
    }));
  }
  
  selectGenres = () => { 
     for(let i = 0; i < genres.length; i++ ) {
       if (genres[i].id === this.state.value) {
           this.setState({ seedGenres: genres[i].value })
       }
       alert(this.state.seedGenres);
     }
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.selectGenres();
    this.getData();
  };


    render() {
      const { value, tracks } = this.state;
      console.info('track',tracks);

    return (
      <div>
      <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            // onClick={this.selectGenres}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Rock" />
            <Tab label="House" />
            <Tab label="Drum and Base" />
            <Tab label="Electro" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </AppBar>
        {value === 0 && <MediaCard tracks={tracks}></MediaCard>}
        {value === 1 && <MediaCard tracks={tracks}></MediaCard>}
        {value === 2 && <MediaCard tracks={tracks}></MediaCard>}
        {value === 3 && <MediaCard tracks={tracks}></MediaCard>}
        {value === 4 && <MediaCard tracks={tracks}></MediaCard>}
        {value === 5 && <MediaCard tracks={tracks}></MediaCard>}
        {value === 6 && <MediaCard tracks={tracks}></MediaCard>}
        {/* {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>} */}
        
      </div>
    )
  }
}

export default withStyles(styles)(GenresBar)
