// ------------------------------------------------------------------------
// app.js - This is a generic Node application provide by the Express cli,
//          routing to both the default and "content" functional locations.
//          NOTE: This does use EJS-based templating; if you choose to use
//          something else (like Angular or React), you will need to change
//          the view engine.
// ------------------------------------------------------------------------


var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

// These are the additional packages we need for this application
var maxAPI = require("max-api");
var cors = require("cors");

// This is the route that contains the application logic
var index = require("./routes/index");

// set up the express app
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// this is the middleware that allows CORS
app.use(cors());

// this is where we handle the index request
// -----------------------------------------
app.use("/", index);

// and this is where we respond to the info request
// obviously, you might want to do more error checking!
// ----------------------------------------------------
app.get("/info/:id", (req, res) => {
	let id = 0;

	let doComplete = (data) => {
		let outObj = {
			value: data[0],
			sqrt: data[1],
			rando: data[2],
			msg: data[3]
		};
		res.json(outObj);
	};

	let doFailure = () => {
		res.json({
			value: 0,
			sqrt: 0,
			rando: 0,
			msg: "System Failure"
		});
	};

	let handler = (args) => {
		maxAPI.removeHandlers("info");
		doComplete(args);
	};

	try {
		if (isNaN(req.params.id)) {
			throw (new Error("Not a number"));
		}

		id = parseInt(req.params.id, 10);
		maxAPI.addHandler("info", (...args) => {
			console.log(args);
			handler(args);
		});

		maxAPI.outlet(id);
	} catch (err) {
		console.log("Error: Value must be an integer!");
		doFailure();
		return;
	}
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
