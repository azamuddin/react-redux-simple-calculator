import store from './redux/configureStore'
import {Provider} from 'react-redux'
import Root from './containers/Root'
import React, { Component } from 'react'
import {render} from 'react-dom'

let rootElement = document.getElementById('render')


render(<Provider store={store}>
    <Root/>
</Provider>, rootElement)
