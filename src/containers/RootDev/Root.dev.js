import React from 'react'
import PropTypes from 'prop-types'
import App from '../../App'
import { Provider } from 'react-redux'
import DevTools from '../DevTools/DevTools'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
        <App />
        <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
