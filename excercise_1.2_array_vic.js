"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require("victor");
var width = 600;
var height = 400;
var location = new Victor(100, 100);
var velocity = new Victor(2, 2.5);
maxAPI.addHandler("locationVelocity", (...args) =>
{
	location.add(velocity);
	if ((location.x > width) || (location.x < 0)) {
		velocity.x = velocity.x * -1;
	}
	if ((location.y > height) || (location.y < 0)) {
		velocity.y = velocity.y * -1;
	}
	maxAPI.outlet("newLocationOutput", location.x, location.y);
});

