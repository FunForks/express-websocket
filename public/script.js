/**
 * /public/script.js
 */


// The WebSocket Server runs on the same domain and port as the
// HTTP server, but with the ws:// protocol
let url = location.origin.replace(/^http/, 'ws')

// Open a connection to the WebSocket Server
const webSocket = new WebSocket(url);

// Display incoming messages sent by the server
const element = document.getElementById('time')

webSocket.onmessage = (event) => {
  const { data: time } = event
  element.innerHTML = `Time on server: ${time}`;
};