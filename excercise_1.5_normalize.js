"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require("victor");
var center = [];

maxAPI.addHandler("vectorMag", (...args) =>
{
	var mouse = new Victor(args[0], args[1]);
	center = new Victor(300, 200);

	console.log(args[0]);
	console.log(args[1]);
	console.log("centerX" + center.x);
	console.log("centerY" + center.y);
	console.log("mouseX" + mouse.x);
	console.log("mouseY" + mouse.y);

	console.log("mouseSub" + mouse.toString());
	var magOutput = mouse.magnitude();

	console.log("magOutput");
	console.log(magOutput);
	// maxAPI.outlet(magOutput);
	maxAPI.outlet("magVectorOutput", magOutput);

	// maxAPI.outlet("magVectorOutput",magOutput);
});

