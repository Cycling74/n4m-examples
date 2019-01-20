"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
// var add = require('vectors/add')(2);
// var mag = require('vectors/mag')(2)
var sub = require("vectors/sub")(2);
// var dot = require('dot-object');
// var location = [100, 100];
// var velocity = [2.5, 5];
var center = [600, 400];
// var mouse = [];
maxAPI.addHandler("locationVelocity", (...args) =>
{
	var mouse = (args[0], args[1]);
	sub(mouse, center);

	// fill(0);
	// rect(0,0,m, 10);
	// translate(width/2, height/2);
	// line(0,0,mouse.x, mouse.y);
	maxAPI.outlet("posX", mouse[0]);
	maxAPI.outlet("posY", mouse[1]);

	maxAPI.outlet("posCenterX", center[0]);
	maxAPI.outlet("posCenterY", center[1]);
});
