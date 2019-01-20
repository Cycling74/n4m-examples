"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require("victor");
var random = require("random");
//var mathplus = require("math-plus");
//var randomVec = require("gl-matrix/random");
var Vector2 = require("gl-matrix/vec2");
var width1 = 600
var height1 = 400;
var location1 = new Victor(width1/2, height1/2);
var velocity1 = new Victor(0,0);
var acceleration1 = new Victor(1,1);
var accelerationVectandomNum1 = Vector2.fromValues(1,200);
var randomNum1 = random.float(0.1,1.9);

class Mover {
	constructor(location, velocity, width, height, acceleration, topspeed, randomNum)
	{
		this.location = location;
		this.velocity = velocity;
		this.width = width;
		this.height = height;
		this.acceleration = acceleration;
		this.topspeed = topspeed;
		this.randomNum = randomNum
	}
	update()
	{

		this.acceleration = Vector2.random(this.acceleration);
		this.randomNum = random.float(0,2);
		
		this.acceleration = Vector2.scale(this.acceleration,this.acceleration,this.randomNum); 
		var accelerationVectors = new Victor(this.acceleration[1], this.acceleration[0]);
		//console.log("accelerationVector" , accelerationVectors.toString())
		this.velocity.limit(6,.5);
		
		this.velocity.add(accelerationVectors);
		//console.log("accelerationVector vector" , newVel.toString())
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
	mover.location = location1;
	mover.velocity = velocity1;
	mover.acceleration = acceleration1;
	mover.topspeed = 6;
	mover.randomNum = randomNum1;
	mover.update();
	mover.checkEdges();
	mover.display();

});
