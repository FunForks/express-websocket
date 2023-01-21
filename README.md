# Proof of Concept Express App with WebSocket Server #

## Getting started
In a Terminal window, run the following commands...
```
npm install
npm start
```
... then visit http://localhost:3000

---

## Server
The `index.js` file at the root of this project:
* Creates an Express app
* Uses the built-in `http` Node module to launch a server for the app
* Creates a WebSocket server, associated with the HTTP server
  This means that the WebSocket server will run on the same domain and port as the HTTP server, but using the `ws://` protocol instead of `http://`.
* Uses setInterval to send the server time to any connected client
* Creates listeners for `connection` and `close` events, in order to provide feedback in the Terminal window.

> **NOTE:** It is essential to wrap the Express app in the HTTP server, and use the HTTP server as the parameter for creating the WebSocket Server instance. While you _can_ tell the Express app itself to `listen` on a particular port, the resulting Express server does not supply all the details that the WebSocket Server requires to launch correctly.

## Client
The Express app serves an index.html page from the `/public` folder. This runs a JavaScript file which:
* Uses the built-in WebSocket class to open a connection to the WebSocket server
* Displays each message from the server, to prove that everything is working.