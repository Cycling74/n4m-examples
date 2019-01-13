"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var add = require('vectors/add')(2)
var dot = require('dot-object');
var location = [100,100];
var velocity = [2.5,5];

maxAPI.addHandler("locationVelocity", (...args) => 
	{
	add(location,velocity)
	if ((location[0] > 130) || (location[0] < 0)) {
		velocity[0] = velocity[0] * -1;
	}
	if ((location[1] > 130) || (location[1] < 0)) {
		velocity[1] = velocity[1] * -1;
	}
    maxAPI.outlet("posX",location[0]);
    maxAPI.outlet("posY",location[1]);
    
});