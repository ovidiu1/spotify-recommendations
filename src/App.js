import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Cookies from 'js-cookie';
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
   
   
  componentDidMount() {
    // Cookies.set('foo', 'bar')
    let isLogin = Cookies.get('isLogin');

    if(!isLogin) { 
      window.location.replace('/login')
    }
  }

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
