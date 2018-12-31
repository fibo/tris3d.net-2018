import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import initialState from './initialState'
import reducer from './reducer'

import socketIoMiddleware from './middlewares/socketIo'

export default function configureStore (state = initialState) {
  return createStore(
    reducer,
    state,
    compose(
      applyMiddleware(
        socketIoMiddleware,
        thunkMiddleware
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}
