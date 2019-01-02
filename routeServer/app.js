// ------------------------------------------------------------------------
// app.js - a generic app provided by the Express cli, updated to provide
//          routing to both the default and 'content' functional locations.
//          NOTE: This does use EJS-based templating; if you choose to use
//          something else (like Angular or React), you will need to change
//          the view engine.
// ------------------------------------------------------------------------


let express = require("express");
let path = require("path");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");

let content = require("./routes/content");
let max = require("./routes/max");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/content", content);   // check for /content first ...
app.use("/", max);              // then everything else ...

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	let err = new Error("Not Found");
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
