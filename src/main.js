import configureStore from './redux/configureStore'
import {Provider} from 'react-redux'
import Root from './containers/Root'
import React, { Component } from 'react'
import {render} from 'react-dom'
import { syncReduxAndRouter } from 'redux-simple-router'
import { createHashHistory } from 'history'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from './routes/index'

let store = configureStore({
    screenValue: 0
})
let history = createHashHistory()
let rootElement = document.getElementById('render')


syncReduxAndRouter(history, store, (state)=>state.routing)


render(<Root store={store} routes={routes} history={history} />, rootElement)
