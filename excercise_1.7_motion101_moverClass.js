"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require("victor");
const random = require("random");

var location1 = new Victor(random.float(0, 600), random.float(0, 200));
var velocity1 = new Victor(random.float( -2, 2), random.float(-2, 2));

class Mover {
	constructor(location, velocity, width, height)
	{
		this.location = location;
		this.velocity = velocity;
		this.width = width;
		this.height = height;
	}
	update()
	{
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
	mover.width = 600;
	mover.height = 400;
	mover.location = location1;
	mover.velocity = velocity1;
	mover.update();
	mover.checkEdges();
	mover.display();

});

