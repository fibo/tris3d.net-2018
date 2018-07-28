import socketIO from 'socket.io-client'

let socket = null

export function initSocketIO () {
  socket = socketIO()

  socket.on('connection', () => {
    console.log('connected')
  })

  socket.on('numUsersOnlineChanged', numUsersOnline => {
    console.log(`numUsersOnline ${numUsersOnline}`)
  })

  socket.on('disconnect', () => {
    console.log('disconnected')
  })
}
