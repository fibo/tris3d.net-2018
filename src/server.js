const express = require('express')
const http = require('http')
const internalIp = require('internal-ip')
const path = require('path')
const socketIO = require('socket.io')

const pkg = require('../package.json')

const app = express()

// Static directory.

const publicDir = path.join(__dirname, '..', 'public')

app.use(express.static(publicDir))

// Routes.

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'))
})

// SocketIO.

const server = http.Server(app)
const io = socketIO(server)

let numUsersOnline = 0

io.on('connection', socket => {
  io.sockets.emit('numUsersOnlineChanged', ++numUsersOnline)

  socket.on('disconnect', () => {
    numUsersOnline--
  })
})

// Start server.

const PORT = process.env.PORT || pkg.config.port
const IP = internalIp.v4.sync()

server.listen(PORT, () => {
  if (IP) {
    console.log(`Server started, point your browser to http://${IP}:${PORT}`)
  } else {
    console.log(`Server started on port ${PORT}\nCould not determine IP server\nIf you have access locally, try to point your browser to http://localhost:${PORT}`)
  }
})
