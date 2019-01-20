"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var x = 100; // Variables for location and speed of ball.
var y = 100;
var xspeed = 1;
var yspeed = 3.3;

maxAPI.addHandler("locationVelocity", (...args)=>
{
	x = x + xspeed;// Move the ball according to its speed
	y = y + yspeed;

	if ((x > 130) || (x < 0))
	{ // Check for bouncing.
		xspeed = xspeed * -1;
	}
	if ((y > 130) || (y < 0))
	{
		yspeed = yspeed * -1;
	}
	maxAPI.outlet("posX", x);
	maxAPI.outlet("posY", y);
});
