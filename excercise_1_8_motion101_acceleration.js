"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require("victor");
const random = require("random");
var width1 = 600;
var height1 = 400;
var location1 = new Victor(width1/2, height1/2);
var velocity1 = new Victor(0, 0);
var topspeed1 = 10;
var acceleration1 = new Victor(-0.001, 0.01);

class Mover {
	constructor(location, velocity, width, height, acceleration, topspeed)
	{
		this.location = location;
		this.velocity = velocity;
		this.width = width;
		this.height = height;
		this.acceleration = acceleration;
		this.topspeed = topspeed;
	}
	update()
	{
		this.velocity.add(this.acceleration);
		this.velocity.limit(10, .5);
		this.location.add(this.velocity);	
	}	display()
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
	mover.width = 600;
	mover.height = 400;
	mover.topspeed = topspeed1;
	mover.location = location1;
    mover.velocity = velocity1;
	mover.acceleration = acceleration1;
	mover.update();
	mover.checkEdges();
	mover.display();
	console.log(random.float()* Math.PI*2);

});

