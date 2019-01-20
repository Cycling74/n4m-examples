"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require("victor");
var center = [];
var mouse = [];
// var vec2 = new Victor(0,0);
maxAPI.addHandler("vectorNormlize", (...args) =>
{
	// vec2 = new Victor(0,0);
	// vec3 = new Victor(0,0);
	mouse = new Victor(args[0], args[1]);
	center = new Victor(300, 200);
	// var vec1 = new Victor(317,15);

	mouse.subtract(center);
	var vec3 = mouse.normalize();

	console.log(...args);
	console.log(vec3.toString());
	maxAPI.outlet("normVectorOutput", 5);
	maxAPI.outlet("normVector", vec3.x, vec3.y);
	// maxAPI.outlet("normVectorOutput",5);

});

maxAPI.addHandler("vectorMag", (...args) =>
{
	mouse = new Victor(args[0], args[1]);
	center = new Victor(300, 200);

	// console.log("mouseSub" + mouse.toString());
	var magOutput = mouse.magnitude();

	console.log("magOutput");
	// console.log(magOutput);
	// maxAPI.outlet(magOutput);

	maxAPI.outlet("magVectorOutput", magOutput);
});
