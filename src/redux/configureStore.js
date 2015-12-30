import React, {Component} from 'react'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

let store = compose(applyMiddleware(thunk))(createStore)(rootReducer)

export default store