// --------------------------------------------------------------------------
//
// helpers.js : provide some message-based helper functions.
//
// --------------------------------------------------------------------------
"use strict";

const MaxMSP = require("max-api");

let Helpers = {
	doCWD: function () {
		MaxMSP.outlet(["cwd", process.cwd()]);
	}
};

MaxMSP.addHandler("cwd", () => {
	Helpers.doCWD();
});

module.exports = Helpers;
