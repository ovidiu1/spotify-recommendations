import React, { Component } from 'react'

import Content from './containers/Content/Content'
import GenresBar from './containers/GenresBar/GenresBar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <GenresBar />
        <Content />
     </div>
    )
  }
}

export default App