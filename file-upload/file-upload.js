#!/usr/bin/env node

// ---------------------------------------------------------------------
// file-upload.js - the starter JS for the file-upload Max project (as
//                  created by the Express CLI).
//
// For the node app, check out the app.js at the top level directory.
// For the functionality, check upload.js in the routes directory.
//
// ---------------------------------------------------------------------


// Module dependencies
// -------------------
var app = require("./app");
var debug = require("debug")("uploader:server");
var http = require("http");


// Set up any internal-use folders that are required
// -------------------------------------------------
var fs = require("fs");
if (!fs.existsSync("./_filesin")) {
	fs.mkdirSync("./_filesin");
}

// Normalize a port into a number, string, or false
// ------------------------------------------------
function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

// Get port from environment and store in Express
// ----------------------------------------------
var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Create HTTP server
// ------------------
var server = http.createServer(app);

// Event listener for HTTP server "error" event
// --------------------------------------------
function onError(error) {
	if (error.syscall !== "listen") {
		throw error;
	}

	var bind = typeof port === "string"
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

// Event listener for HTTP server "listening" event
// ------------------------------------------------
function onListening() {
	var addr = server.address();
	var bind = typeof addr === "string"
		? "pipe " + addr
		: "port " + addr.port;
	debug("Listening on " + bind);
}

// Listen on provided port, on all network interfaces
// --------------------------------------------------
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
