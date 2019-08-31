import React, { Component } from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import ErrorComponent from '../../components/Error/ErrorComponent'
import MediaCard from '../../components/Crads/MediaCard'

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
        this.state = {  }
    }

    componentDidMount() {
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <Grid container
                        className='wrapper'
                        spacing={16}
                        direction='row'
                        alignItems='center'
                        justify='center'>
                        {/* {isLoading ? <CircularProgress className="progress" /> : ''} */}
                        {/* {error ? <ErrorComponent /> : ''} */}
                        {/* <MediaCard tracks={tracks}></MediaCard> */}
                    </ Grid>
                </MuiThemeProvider>
            </>
        );
    }
}
export default Content;