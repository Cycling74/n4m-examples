"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require("victor");
// var vectorArray= [];
var location = [];
maxAPI.addHandler("text1", (...args) => {
// The outlet function sends the arguments right back to Max. Hence, echo.
	maxAPI.outlet(...args);
});

maxAPI.addHandler("textRoute", (...args) => {
	// add(location, speed)
	// The outlet function sends the arguments right back to Max. Hence, echo.
	// maxAPIoutlet("textRouteOutput", ...args);
	maxAPI.outlet("addVectors", 5);
});

maxAPI.addHandler("locationVelocity", (...args) => {
	location = [args[1], args[2]];

	maxAPI.outlet(location);
	maxAPI.outlet("locationVelocityOutput", ...location);
});
maxAPI.addHandler("addingVectors", (...args) => {

	var vector1 = new Victor(args[1], args[2]);
	var vector2 = new Victor(args[3], args[4]);

	var ret = vector1.add(vector2);
	var vectorArray = [ret.x, ret.y];
	// maxAPIoutlet(vector1);
	maxAPI.outlet("addingVectorsOutput", ...vectorArray);
});

maxAPI.addHandler("subtractVectors", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	var vector2 = new Victor(args[3], args[4]);

	var ret = vector1.subtract(vector2);
	var vectorArray = [ret.x, ret.y];
	// maxAPIoutlet(vector1);
	maxAPI.outlet("subtracVectorsOutput", ...vectorArray);
});

maxAPI.addHandler("multVectors", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	var vector2 = new Victor(args[3], args[4]);
	var ret = vector1.multiply(vector2);
	var vectorArray = [ret.x, ret.y];

	maxAPI.outlet(vector1);
	maxAPI.outlet("multVectorsOutput", ...vectorArray);
});

maxAPI.addHandler("divVectors", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	var vector2 = new Victor(args[3], args[4]);

	var ret = vector1.divide(vector2);
	var vectorArray = [ret.x, ret.y];
	// maxAPIoutlet(vector1);

	maxAPI.outlet(vector1);
	maxAPI.outlet("divVectorsOutput", ...vectorArray);
});

maxAPI.addHandler("magVector", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	// var vector3 = [args[5], args[6]];
	var ret = vector1.magnitude();

	maxAPI.outlet(ret);
	maxAPI.outlet("magVectorOutput", ret);
});

maxAPI.addHandler("normVector", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	var ret = vector1.normalize();
	var vectorArray = [ret.x, ret.y];
	maxAPI.outlet(...vectorArray);
	maxAPI.outlet("normVectorOutput", ...vectorArray);
});

maxAPI.addHandler("headingVector", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	// var heading = (heading(vector1,vector2))
	// var head = (heading(vector1,vector2)) * 180 / Math.PI
	var heading = vector1.verticalAngleDeg();
	maxAPI.outlet(heading);
	maxAPI.outlet("headingVectorOutput", heading);
});

maxAPI.addHandler("dotVector", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	var vector2 = new Victor(args[3], args[4]);
	var dots = vector1.dot(vector2);
	maxAPI.outlet(dots);
	maxAPI.outlet("dotVectorOutput", dots);
});

