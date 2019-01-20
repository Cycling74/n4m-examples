"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require("victor");
const random = require("random");
const mathplus = require("math-plus");
var width1 = 600
var height1 = 400;
var location1 = new Victor(width1/2, height1/2);
var velocity1 = new Victor(0,0);
var acceleration1 = new Victor(1,1);


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
		var topLeft = new Victor(0, 0);

		var bottomRight = new Victor(this.width, this.height);
		var location1 = new Victor(random.float(-1, 1), random.float(0, 200));
	
		
		//this.acceleration.random(this.acceleration.x  this.acceleration.y);

		console.log("acceleration " , this.acceleration.x);
		console.log("velocity " , this.velocity.toString());
		
		this.acceleration.multiply(random.int( 0, 2), random.int(0, 2));
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.acceleration);
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


/* ublic float magSq() {
    return (x*x + y*y + z*z);
  }
  .lengthSq()

class limit(float max) {
    if (magSq() > max*max) {
      normalize();
      mult(max);
    }
    return this;
  } */


  class Limit 
  {
	constructor(max, velocity)
		{
			this.max = max;
			this.velocity = velocity;
		}
	limit()
	{
		if(this.velocity.lengthSq() > this.max * this.max)
		{
			this.velocity.normalize();
			this.velocity.mult(this.max);
		}
		maxAPI.outlet("newLocationOutput", this.velocity.x, this.velocity.y);
	}
		  
}


maxAPI.addHandler("motion", (...args) =>
{
	var mover = new Mover();
	var limit = new Limit();
	limit.velocity = velocity1;
	limit.max = 6;

	mover.width = width1;
	mover.height = height1;
	mover.location = new Victor(width1/2, height1/2);
	mover.velocity = new Victor(0,0);
	mover.acceleration = new Victor(0,0);
    mover.topspeed = 6;
	mover.update();
	mover.checkEdges();
	mover.display();

});
