// --------------------------------------------------------------------------
//
// upload.js - the route handler for an upload 'request'.
//
// --------------------------------------------------------------------------


var express = require("express");
var router = new express.Router();
const path = require("path");
const Max = require("max-api");


// deal with a post request to the / route
// ---------------------------------------
router.post("/", function (req, res, next) {
	// bail if there are no files...
	if (!req.files) {
		res.render("status", {status: "No files uploaded"});
		return;
	}

	// The name of the input field (i.e. "sampleFile") is used to
	// retrieve the uploaded file
	let sampleFile = req.files.sampleFile;
	let newPath = path.join(process.cwd(), "_filesin", sampleFile.name);

	// Move the file to a specific location (to make it easy to handle)
	sampleFile.mv(newPath, function (err)  {
		if (err) {
			res.render("status", {status: err});
		} else {
			Max.outlet(newPath);
			res.render("status", {status: sampleFile.name + " upload complete."});
		}
	});
});

module.exports = router;
