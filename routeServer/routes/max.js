// --------------------------------------------------------------------------
//
// max.js : deal with the interaction between Max and the browser. This uses
//          the brokering mechanism provided in the message_broker.js source.
//
// --------------------------------------------------------------------------


let express = require("express");
let router = new express.Router();

const MaxMSP = require("max-api");
let broker = require("../js/message_broker");

// ------------------------------------------------------------------------
// incoming messages are brokered, because they should have be responses
// to previous requests - or are system broadcast messages that have to
// go to all listeners...
// ------------------------------------------------------------------------

MaxMSP.addHandler("test", (args) => console.log(args));
MaxMSP.addHandler(MaxMSP.MESSAGE_TYPES.ALL, (handled, ...args) => {
	if (!handled) {
		broker.brokerMessage(args);
	}
});

// ------------------------
// Convenience functions!
// ------------------------

let hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(obj) {
	if (obj === null) return true;
	if (obj.length > 0) return false;
	if (obj.length === 0) return true;
	if (typeof obj !== "object") return true;
	for (let key in obj) {
		if (hasOwnProperty.call(obj, key)) return false;
	}
	return true;
}

// ------------------------------------------------------------------------
// In the event that we have an object, we need to format it into an
// easy-to-digest set of html lines - a nice way of taking an object and
// making it usefully visible on our generic web page...
// ------------------------------------------------------------------------

function decodeKeys(obj, ind) {
	let outContent = "";
	let indentLevel = (ind || 0);
	let tmp = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(indentLevel);

	let theKeys = Object.keys(obj);
	if (theKeys.length < 1) {
		outContent = tmp + "<i>empty</i><br/>";
		return outContent;
	}

	for (let i = 0; i < theKeys.length; i++) {
		let typ = typeof(obj[theKeys[i]]);
		if (typ !== "object") {
			outContent += tmp + "<b>" + theKeys[i] + ":</b> " + obj[theKeys[i]] + "<br/>";
			if (indentLevel < 1) {
				outContent += "<br />";
			}
		} else {
			outContent += tmp + "<b>" + theKeys[i] + ":</b><br/>";
			outContent += decodeKeys(obj[theKeys[i]], indentLevel + 1);
			outContent += "<br />";
		}
	}
	return outContent;
}

// ------------------------------------------------------------------------
// Handle the incoming GET request, create the dictionary for Max, then
// deal with the return information that Max provides.
// ------------------------------------------------------------------------

router.all("/*", function (req, res, next) {

	// tear apart the request for useful information
	let tmpTokens = req.path.split("/").filter(e => !isEmpty(e));
	let outDict = {
		uuid: "",
		ip: req.ip,
		url: req.path,
		tokens: tmpTokens.length ? tmpTokens : "/",
		verb: req.method,
		body: req.body,
		cookies: req.cookies,
		query: req.query
	};

	// then deal with the whole thing in a promise
	let reqFunc = new Promise((resolve, reject) => {
		let myID = "";

		// time out if more than two seconds
		let intrHandle = setTimeout(function () {
			reject("timeout");
		}, 2000);

		// set up a response function
		let resFunction = (val) => {
			clearTimeout(intrHandle);
			broker.removeListener(myID);

			// figure out what kind of message we have...
			if (val.hasOwnProperty("httpStatus")) {
				// deal with an http status message
				resolve({
					kind: "httpStatus",
					content: val.httpStatus
				});
			} else if (val.hasOwnProperty("htmlContent")) {
				// deal with an html content message
				resolve({
					kind: "htmlContent",
					title: val.htmlTitle || "From Max",
					content: val.htmlContent
				});
			} else {
				// the generic case
				delete val.uuid;
				resolve({kind: "generic", content: val});
			}
		};

		// listen for the result, then send the message
		myID = broker.addListener(resFunction);
		outDict.uuid = myID;
		MaxMSP.outlet(outDict);
	});

	// manage the result of the promise by responding with
	// an appropriate rendering and content set, and deal
	// with errors using a 500 error.
	reqFunc.then((obj) => {
		if (obj.kind === "httpStatus") {
			res.writeHead(obj.content);
			res.end();
		} else if (obj.kind === "htmlContent") {
			res.render("max_html", {
				title: obj.title,
				html: obj.content
			});
		} else if (obj.kind === "generic") {
			res.render("max_data", {
				html: decodeKeys(obj.content)
			});
		}
	}).catch((err) => {
		res.writeHead(500);
		res.end();
	});

});

module.exports = router;
