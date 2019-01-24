// ------------------------------------------------------------------------
// app.js - This is a generic Node application provide by the Express cli,
//          routing to both the default and 'content' functional locations.
//          NOTE: This does use EJS-based templating; if you choose to use
//          something else (like Angular or React), you will need to change
//          the view engine.
// ------------------------------------------------------------------------


var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

// This is the additional package we need for uploading
const fileUpload = require("express-fileupload");

// These are the routes that contain the application logic
var index = require("./routes/index");
var upload = require("./routes/upload");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// deal with the Express middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());

// These are the routes used based on the incoming URL.
app.use("/", index);
app.use("/upload", upload);

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

module.exports = app;
