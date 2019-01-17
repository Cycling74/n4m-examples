"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var vectorsGeom = require('geom-vector2d')
var Victor = require('victor')
var add = require('vectors/add')(2)
var sub = require('vectors/sub')(2)
var mult = require('vectors/mult')(2)
var div = require('vectors/div')(2)
var mag = require('vectors/mag')(2)
var dot = require('vectors/dot')(2)
var norm = require("vectors/normalize")(2)
var heading = require("vectors/heading")(2)
var vectorArray= [];	
var location = [];
var speed = [];
// When node.script gets the symbol "text", the remainder will be passed to this function.
// The "..." is  the spread operator. All of the arguments to this function will go into args as an array.
//
maxAPI.addHandler("text1", (...args) => {
// The outlet function sends the arguments right back to Max. Hence, echo.
	maxAPI.outlet(...args);
});

maxAPI.addHandler("textRoute", (...args) => {
	add(location,speed)
	// The outlet function sends the arguments right back to Max. Hence, echo.
	//maxAPI.outlet("textRouteOutput", ...args);
	maxAPI.outlet("addVectors",5);
});

maxAPI.addHandler("locationVelocity", (...args) => {
	location = [args[1], args[2]]
	speed = [args[3], args[4]]
    add(location,speed)
    maxAPI.outlet(location);
    maxAPI.outlet("locationVelocityOutput",...location);
});
maxAPI.addHandler("addingVectors", (...args) => {
	
	var vector1 = new Victor(args[1], args[2]);
	var vector2 = new Victor(args[3], args[4]);
	
	var ret = vector1.add(vector2);
	var vectorArray= [ret.x,ret.y];
    //maxAPI.outlet(vector1);
    maxAPI.outlet("addingVectorsOutput",...vectorArray);
});

maxAPI.addHandler("subtractVectors", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	var vector2 = new Victor(args[3], args[4]);
	
	var ret = vector1.subtract(vector2);
	var vectorArray= [ret.x,ret.y];
    //maxAPI.outlet(vector1);
    maxAPI.outlet("subtracVectorsOutput",...vectorArray);
});

maxAPI.addHandler("multVectors", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	var vector2 = new Victor(args[3], args[4]);
	
	var ret = vector1.multiply(vector2);
	var vectorArray= [ret.x,ret.y];
	
    maxAPI.outlet(vector1);
    maxAPI.outlet("multVectorsOutput",...vectorArray);
});

maxAPI.addHandler("divVectors", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	var vector2 = new Victor(args[3], args[4]);
	
	var ret = vector1.divide(vector2);
	var vectorArray= [ret.x,ret.y];
    //maxAPI.outlet(vector1);
		
    maxAPI.outlet(vector1);
    maxAPI.outlet("divVectorsOutput",...vectorArray);
});

maxAPI.addHandler("magVector", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	//var vector3 = [args[5], args[6]];
	var ret= vector1.magnitude();
		
    maxAPI.outlet(ret);
    maxAPI.outlet("magVectorOutput",ret);
});

maxAPI.addHandler("normVector", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	var ret= vector1.normalize();
	var vectorArray= [ret.x,ret.y];	
    maxAPI.outlet(...vectorArray);
    maxAPI.outlet("normVectorOutput",...vectorArray);
});

maxAPI.addHandler("headingVector", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	//var heading = (heading(vector1,vector2))
	//var head = (heading(vector1,vector2)) * 180 / Math.PI	
	var heading = vector1.verticalAngleDeg();
    maxAPI.outlet(heading);
    maxAPI.outlet("headingVectorOutput",heading);
});

maxAPI.addHandler("dotVector", (...args) => {
	var vector1 = new Victor(args[1], args[2]);
	var vector2 = new Victor(args[3], args[4]);
	
	var dots = vector1.dot(vector2);
	maxAPI.outlet(dots);
	maxAPI.outlet("dotVectorOutput",dots);
});



