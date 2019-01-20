"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require("victor");
const random = require("random");
var width1 = 600;
var height1 = 400;
var location1 = new Victor(width1/2,height1/2);
var velocity1 = new Victor(0,0);

class Mover {
	constructor(location, velocity, width, height, mouse, acceleration,topspeed)
	{
		this.location = location;
		this.velocity = velocity;
		this.width = width;
		this.height = height;
		this.mouse = mouse;
		this.acceleration = acceleration;
		this.topspeed = topspeed;

		

	}
	update()
	{
		// Compute a vector that points from location to mouse
		
		this.acceleration = this.mouse.subtract(this.location);
		// Set magnitude of acceleration
		//this.acceleration.setMag(0.2);
		this.acceleration.normalize();
		this.acceleration.mult(0.2);
		
		// Velocity changes according to acceleration
		this.velocity.add(this.acceleration);
		// Limit the velocity by topspeed
		this.velocity.limit(this.topspeed,);
		// Location changes by velocity
		this.location.add(this.velocity);
	}

	display()
	{
		maxAPI.outlet("newLocationOutput", this.location.x, this.location.y);
	}

	checkEdges() {

		if (this.location.x > this.width) {
			this.location.x = 0;
		}
		else if (this.location.x < 0) {
			this.location.x = this.width;
		}
		if (this.location.y > this.height) {
			this.location.y = 0;
		}
		else if (this.location.y < 0) {
			this.location.y = this.height;
		}
	}
}


maxAPI.addHandler("motion", (...args) =>
{
	var mover = new Mover();
	mover.width = width1;
	mover.height = height1;
	mover.mouse = new Victor(args[0],args[1]);
	mover.location = location1;
	mover.velocity = velocity1;
	mover.topspeed = 6;
	mover.update();
	mover.checkEdges();
	mover.display();

});

