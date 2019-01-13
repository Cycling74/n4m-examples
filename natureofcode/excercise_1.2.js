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
	add(locationDot,velocityDot)
	if ((locationDot.x > 130) || (locationDot.x < 0)) {
		velocity.x = velocity.x * -1;
	}
	if ((locationDot.y > 130) || (locationDot.y < 0)) {
		velocityDot.y = velocityDot.y * -1;
	}
    maxAPI.outlet("posX",locationDot.x);
    maxAPI.outlet("posY",locationDot.y);
    
});