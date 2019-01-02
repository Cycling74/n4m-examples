#!/usr/bin/env node
// ------------------------------------------------------------------------
// max_routeServer.js - a generic app launcher provided by the Express cli,
//                      but renamed to prevent searchpath clashes. Calls
//                      the local app.js to actually run the application.
// ------------------------------------------------------------------------


let app = require("./app");
let debug = require("debug")("node-routetest:server");
let http = require("http");

let server;
let port;

// ----------------------------
// Normalize the port properly
// ----------------------------

function normalizePort(val) {
	let localPort = parseInt(val, 10);

	// named pipe
	if (isNaN(localPort)) {
		return val;
	}

	// port number
	if (localPort >= 0) {
		return localPort;
	}

	return false;
}

port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// ------------------------------------
// Watch for HTTP server error events.
// ------------------------------------

function onError(error) {
	if (error.syscall !== "listen") {
		throw error;
	}

	let bind = typeof port === "string"
		? "Pipe " + port
		: "Port " + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

// ---------------------------------------
// Watch for HTTP server listening events
// ---------------------------------------

function onListening() {
	let addr = server.address();
	let bind = typeof addr === "string"
		? "pipe " + addr
		: "port " + addr.port;
	debug("Listening on " + bind);
}

// ---------------------
// Create the server...
// ---------------------
server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
