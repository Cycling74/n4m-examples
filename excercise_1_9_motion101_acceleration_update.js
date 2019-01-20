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
var accelerationVector1 = Vector2.fromValues(1,200);
var randomNum =0;

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
		this.acceleration = Vector2.random(this.acceleration);
        randomNum = random.float(0,5);
        
		var testVec = new Victor(randomNum, randomNum);
		var accelerationVectors = new Victor(this.acceleration[0],this.acceleration[1]);
		accelerationVectors.multiply(testVec)
		this.velocity.add(accelerationVectors,randomNum);
		console.log("accelerationVector vector" , this.velocity.toString())
		//this.velocity.limit(this.acceleration);
		this.location.add(this.velocity);
		//console.log("location " , this.location.toString());
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
	mover.location = new Victor(width1/2, height1/2);
	mover.velocity = new Victor(0,0);
	mover.acceleration = accelerationVector1;
    mover.topspeed = 6;
	mover.update();
	mover.checkEdges();
	mover.display();

});
