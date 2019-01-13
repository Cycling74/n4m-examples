"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var add = require('vectors/add')(2)
var dot = require('dot-object');
var location = [100,100];
var velocity = [2.5,5];
let locationDot ={
	'x':100,
	'y':100
}
let velocityDot ={
	'x':2.5,
	'y':5
}

maxAPI.addHandler("locationVelocity", (...args) => 
	{
	console.log(velocityDot.x)
    
});