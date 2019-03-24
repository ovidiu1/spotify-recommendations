import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import GenresBar from './containers/GenresBar/GenresBar'
import './App.css'

const theme  = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
  },
  })
class App extends Component {
  render() {
    return (
      <>
      <MuiThemeProvider theme={theme}>
        <GenresBar />
      </MuiThemeProvider>
      </>
    );
  }
}

export default App
