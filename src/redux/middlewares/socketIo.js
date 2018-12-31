import socketIO from 'socket.io-client'

import {
  numUsersOnlineChanged
} from '../reducer'

function initSocketIo () {
  const socket = socketIO()

  socket.on('connection', () => {
    console.log('connected')
  })

  socket.on('numUsersOnlineChanged', numUsersOnline => {
    numUsersOnlineChanged(numUsersOnline)
  })

  socket.on('disconnect', () => {
    console.log('disconnected')
  })

  return socket
}

export default function socketIoMiddleware (store) {
  const socket = initSocketIo()

  return next => action => {
    const result = next(action)
    const state = store.getState()

    switch (action.type) {
      case SET_CHOICE:
        socket.emit('setChoice', action.cubeIndex)
        break
    }

    return result
  }
}
