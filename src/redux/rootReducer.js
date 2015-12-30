import { combineReducers } from 'redux'
import counter from './reducers/counter'


let rootReducer = combineReducers({counter})

export default rootReducer