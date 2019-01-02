// --------------------------------------------------------------------------
//
// content.js : deal with a 'contentfolder' that can contain static files
//              to be served to the browser. Note: if the contentFolder
//              variable is null, the route is ignored; hence, to use this,
//              the application needs to receive a valid 'contentfolder'
//              message with a file path.
//
// --------------------------------------------------------------------------


const MaxMSP = require("max-api");

let express = require("express");
let router = new express.Router();
let path = require("path");

let contentFolder = null;

// deal with a 'contentfolder' message. This message either needs to have a
// valid filepath for a folder, or it needs to have the word 'clear' (which
// will remove any existing path).
// ------------------------------------------------------------------------
MaxMSP.addHandler("contentfolder", (args) => {
	if (typeof(args) === "string") {
		if (args === "clear") {
			contentFolder = null;
			console.log("Content folder cleared");
		} else {
			if (args[0] === ".") {
				contentFolder = path.join(process.cwd(), args);
				console.log(`Content folder set to ${contentFolder}`);
			} else {
				contentFolder = args;
			}
		}
	} else {
		console.err("bad folder name");
	}
});

// Assuming that the contentFolder has been set up, this route will serve up
// the filename that is provided. If contentFolder is not set up, it will
// pass to the next express middleware.
// -------------------------------------------------------------------------
router.get("/:name", function (req, res, next) {
	if (!contentFolder) {
		next();
	} else {
		var fileName = path.join(contentFolder, req.params.name);
		console.log("content request providing " + fileName);

		var options = {
			headers: {
				"x-timestamp": Date.now(),
				"x-sent": true
			}
		};

		res.sendFile(fileName, options, function (err) {
			if (err) {
				next(err);
			} else {
				console.log("Sent:", fileName);
			}
		});
	}
});

module.exports = router;
