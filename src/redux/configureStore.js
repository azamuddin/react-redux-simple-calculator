import React, {Component} from 'react'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'


export default function configureStore(initialState){
    let store = compose(applyMiddleware(thunk))(createStore)(rootReducer, initialState)
    return store
}