import React, { Component } from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import ErrorComponent from '../../components/Error/ErrorComponent'
import MediaCard from '../../components/Crads/MediaCard'
import axios from 'axios'

import { connect } from 'react-redux'

import './Content.css'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: green,
    },
})
const progress = {
    margin: theme.spacing.unit * 2,
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'heavy-metal',
            tracks: [],
            isLoading: false,
            error: null
        }
    }

    getData = () => {
        const token = 'BQBQvw2rb40OjlTMb_hyICmw_r7TA7N0yEohObTKlP2KHdRPlg4FUMvCLCZsXFRGlu1FHSWhC-iCdxyQ26VFqAaXbZJO96YYNUWgP5orfrTUk7gxAqbeG6eS5UmRta-qQ7523FWNvJ_AleFKafXzllL74zHFkK_nTun6B3kRnl8YKrjA00Os9pg8b7ZvZxn6RNM';
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

    componentDidMount() {
        this.setState({ isLoading: true });
        this.getData();
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
                    <Grid container
                        className='wrapper'
                        spacing={16}
                        direction='row'
                        alignItems='center'
                        justify='center'>
                        {isLoading ? <CircularProgress className="progress" /> : ''}
                        {error ? <ErrorComponent /> : ''}
                        <MediaCard tracks={tracks}></MediaCard>
                    </ Grid>
                </MuiThemeProvider>
            </>
        );
    }
}
export default connect()(Content);