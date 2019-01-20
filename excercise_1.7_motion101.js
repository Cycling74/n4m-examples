"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require("victor");
const random = require("random");
var width = 750;
var height = 550;
var location = new Victor(random.float(0, 300), random.float(0, 200));
var velocity = new Victor(random.float( 2, 4), random.float(2, 4));

maxAPI.addHandler("motion", (...args) =>
{
	location.add(velocity);

	if (location.x > width)
	{
		location.x = 0;
	}else if (location.x < 0)
	{
		location.x = width;
	}
	if (location.y > height)
	{
		location.y = 0;
	}else if (location.y < 0) {
		location.y = height;
	}
	console.log(location.x);
	console.log(location.y);
	console.log(velocity.toString());
	maxAPI.outlet("newLocationOutput", location.x, location.y);
});
