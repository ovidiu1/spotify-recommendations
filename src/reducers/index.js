
import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'
import  genres  from './genres'
 
const rootReducer = combineReducers({
    genres
})

export default rootReducer

