"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var add = require("vectors/add")(2);
var sub = require("vectors/sub")(2);
var mult = require("vectors/mult")(2);
var div = require("vectors/div")(2);
var mag = require("vectors/mag")(2);
var dot = require("vectors/dot")(2);
var norm = require("vectors/normalize")(2);
var heading = require("vectors/heading")(2);

var location = [];
var speed = [];
// When nodescript gets the symbol "text", the remainder will be passed to this function.
// The "..." is  the spread operator. All of the arguments to this function will go into args as an array.

maxAPI.addHandler("text1", (...args) => {
// The outlet function sends the arguments right back to Max. Hence, echo.
	maxAPI.outlet(...args);
});

maxAPI.addHandler("textRoute", (...args) => {
	add(location, speed);
	// The outlet function sends the arguments right back to Max. Hence, echo.
	// maxAPI.outlet("textRouteOutput", ...args);
	maxAPI.outlet("addVectors", 5);
});

maxAPI.addHandler("locationVelocity", (...args) => {
	location = [args[1], args[2]];
	speed = [args[3], args[4]];
	add(location, speed);
	maxAPI.outlet(location);
	maxAPI.outlet("locationVelocityOutput", ...location);
});
maxAPI.addHandler("addingVectors", (...args) => {
	var vector1 = [args[1], args[2]];
	var vector2 = [args[3], args[4]];
	var vector3 = [args[5], args[6]];

	add(vector1, vector2);
	add(vector1, vector3);

	maxAPI.outlet(vector1);
	maxAPI.outlet("addingVectorsOutput", ...vector1);
});

maxAPI.addHandler("subtractVectors", (...args) => {
	var vector1 = [args[1], args[2]];
	var vector2 = [args[3], args[4]];
	// var vector3 = [args[5], args[6]];
	sub(vector1, vector2);
	// sub(vector1,vector3)

	maxAPI.outlet(vector1);
	maxAPI.outlet("subtractVectorsOutput", ...vector1);
});

maxAPI.addHandler("multVectors", (...args) => {
	var vector1 = [args[1], args[2]];
	var vector2 = [args[3], args[4]];
	// var vector3 = [args[5], args[6]];
	mult(vector1, vector2);

	maxAPI.outlet(vector1);
	maxAPI.outlet("multVectorsOutput", ...vector1);
});

maxAPI.addHandler("divVectors", (...args) => {
	var vector1 = [args[1], args[2]];
	var vector2 = [args[3], args[4]];
	// var vector3 = [args[5], args[6]];
	div(vector1, vector2);

	maxAPI.outlet(vector1);
	maxAPI.outlet("divVectorsOutput", ...vector1);
});

maxAPI.addHandler("magVector", (...args) => {
	var vector1 = [args[1], args[2]];
	// var vector3 = [args[5], args[6]];
	mag(vector1);

	maxAPI.outlet(vector1);
	maxAPI.outlet("magVectorOutput", vector1[1]);
});

maxAPI.addHandler("normVector", (...args) => {
	var vector1 = [args[1], args[2]];
	// var vector3 = [args[5], args[6]];
	norm(vector1);

	maxAPI.outlet(vector1);
	maxAPI.outlet("normVectorOutput", vector1[1]);
});

maxAPI.addHandler("headingVector", (...args) => {
	var vector1 = [args[1], args[2]];
	var vector2 = [args[3], args[4]];
	var head = (heading(vector1, vector2)) * 180 / Math.PI;
	maxAPI.outlet(head);
	maxAPI.outlet("headingVectorOutput", head);
});

maxAPI.addHandler("dotVector", (...args) => {
	var vector1 = [args[1], args[2]];
	var vector2 = [args[3], args[4]];
	var dots = dot(vector1, vector2);
	maxAPI.outlet(dots);
	maxAPI.outlet("dotVectorOutput", dot(vector1, vector2));
});

