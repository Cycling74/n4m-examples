// --------------------------------------------------------------------------
// max_sockets.js - a generic Node/Express application that serves up the
//                  requested web pages, and manages a socket connection
//                  with any requesting pages. This is part of the Node for
//                  Max system for Max 8.
// --------------------------------------------------------------------------

const express = require("express");
const http = require("http");
const path = require("path");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const WebSocket = require("ws");

const Max = require("max-api");

var index = require("./routes/index");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

// handle the web socket server here (using the ws package...)
// Note: Replace this with your own customer socket handler
//       if you are creating a custom websockets implementation
// -------------------------------------------------------------
let server = http.createServer(app);

const wss = new WebSocket.Server({ port: 7474 });

wss.on("connection", function connection(ws, req) {

	ws.on("message", function incoming(message) {
		console.log("received: %s", message);
	});

	ws.on("close", function stop() {
		Max.removeHandlers("send");
		console.log("Connection closed");

		ws.terminate();
	});

	const sender = function (a, b, c) {
		ws.send(JSON.stringify({
			"value_1": a,
			"value_2": b,
			"value_3": c
		}));
	};

	// Handle the Max interactions here...
	Max.addHandler("send", (...args) => {
		console.log("send args: " + args);
		if (args.length === 3) {
			sender(args[0], args[1], args[2]);
		}
	});
});

Max.addHandler(Max.MESSAGE_TYPES.ALL, (handled, ...args) => {
	if (!handled) {
		// Max.post('No client connected.')
		// just consume the message
	}
});

console.log("setting up max handlers");

server.listen(8080, function listening() {
	console.log("Listening on %d", server.address().port);
});
