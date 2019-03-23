import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../../components/Crads/MediaCard';
import axios from 'axios';


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  wrapper: {
    padding: '16px'
  }
});

export class GenresBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'heavy-metal',
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

  handleChange = (event, value) => {
    this.setState({ value },() => {
      this.getData();
    })
  };

    render() {
      const { classes } = this.props;
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
            <Tab label="Rock" value='heavy-metal' />
            <Tab label="House" value="deep-house" />
            <Tab label="Drum and Base" value="drum-and-bass" />
            <Tab label="Electro" value="electro"/>
          </Tabs>
        </AppBar>
        <Grid container
        className={classes.wrapper}
        spacing={16}
        direction='row'
        alignItems='center'
        justify='center'>
        
        <MediaCard tracks={tracks}></MediaCard>

        {/* {value === 'heavy-metal' && <MediaCard tracks={tracks}></MediaCard>}
        {value === 'deep-house' && <MediaCard tracks={tracks}></MediaCard>}
        {value === 'drum-and-bass' && <MediaCard tracks={tracks}></MediaCard>}
        {value === 'electro' && <MediaCard tracks={tracks}></MediaCard>} */}
        </ Grid>
      </div>
    )
  }
}

export default withStyles(styles)(GenresBar)
