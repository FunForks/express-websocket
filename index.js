
/* EXPRESS */
const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)

const PORT = process.env.PORT || 3000

server.listen(PORT, serverStarted)
app.use(express.static('public'))


function serverStarted() {
  console.log(
    `Express server running at http://localhost:${PORT}
    (Ctrl-click on the url to open it in your browser)`
  )
}

/* WEBSOCKET */

// Create a WebSocket server and run it on the same domain and
// port as the HTTP server, but with the WS protocol
const WebSocket = require('ws')
const WebSocketServer = new WebSocket.Server({ server })



// Show that the websocket connection is working
setInterval(pingEverySecond, 1000)

function pingEverySecond() {
  WebSocketServer.clients.forEach( client => {
    client.send(new Date().toTimeString())
  })
}



// Provide feedback in the Terminal window
WebSocketServer.on("connection", webSocketConnected)

function webSocketConnected(webSocketInstance) {
  console.log("New client connected")

  webSocketInstance.on("close", webSocketClosed)
}

function webSocketClosed() {
  console.log("Client has disconnected")
}