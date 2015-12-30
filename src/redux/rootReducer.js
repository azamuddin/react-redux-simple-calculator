import { combineReducers } from 'redux'
import counter from './reducers/counter'
import {routeReducer as routing} from 'redux-simple-router'

let rootReducer = combineReducers({counter, routing: routing})

export default rootReducer