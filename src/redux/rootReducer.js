import { combineReducers } from 'redux'
import screenValue from './reducers/screenValue'
import {routeReducer as routing} from 'redux-simple-router'

let rootReducer = combineReducers({screenValue, routing: routing})

export default rootReducer