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

// const genres = [
//   {
//     id: 0,
//     value: 'balck-metal',   
//   },  
//   {
//     id: 1,
//     value: 'deep-house',
//   },
//   {
//     id: 2,
//     value: 'drum-and-bass',
//   },
//   {
//     id: 3,
//     value: 'electro',
//   }
// ]

export class GenresBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'black-metal',
      seedGenres: '',
      tracks: [],
      isLoading: false,
      error: null
    }
    this.myRef = React.createRef();
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });
    this.getData();
  }

  getData = () => {
    const token = '';
    const config = {
      headers: { 'Authorization': "Bearer " + token }
    }

    const endPoint = 'https://api.spotify.com/v1/recommendations';
    const limit = 10;
    let link = `${endPoint}?limit=${limit}&seed_genres=${this.state.value}`;
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
  
  // selectGenres = () => { 
  //    for(let i = 0; i < genres.length; i++ ) {
  //      if (genres[i].id === this.state.value) {
  //          this.setState({ seedGenres: genres[i].value })
  //      }
  //      alert(this.state.seedGenres);
  //    }
  // }

  selectGenres = (event, ref) => {
    // this.setState({ seedGenres: refs })
    const node = this.myRef.current;
    console.log(node);
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.getData();
  };


    render() {
      const { value, tracks } = this.state;
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
        
            <Tab label="Rock" value='black-metal' />
            <Tab label="House" value="deep-house" />
            <Tab label="Drum and Base" value="drum-and-bass" />
            <Tab label="Electro" value="electro"/>
          </Tabs>
        </AppBar>

        {value === 'black-metal' && <MediaCard tracks={tracks}></MediaCard>}
        {value === 'deep-house' && <MediaCard tracks={tracks}></MediaCard>}
        {value === 'drum-and-bass' && <MediaCard tracks={tracks}></MediaCard>}
        {value === 'electro' && <MediaCard tracks={tracks}></MediaCard>}
        
      </div>
    )
  }
}

export default withStyles(styles)(GenresBar)
