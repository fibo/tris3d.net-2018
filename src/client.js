import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './redux/container'
import configureStore from './redux/configureStore'

import { initSocketIO } from './redux/middleware/socketIO'
initSocketIO()

const splashscreen = document.querySelector('.splashscreen')
const main = document.querySelector('main')

splashscreen.classList.add('hidden')
main.classList.remove('hidden')

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  main
)
