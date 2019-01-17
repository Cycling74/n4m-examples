"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require('victor')
const random = require('random')

var width = 600;
var height = 400
//var vec2 = new Victor(0,0);
var location = new Victor(random.float(0, 600), random.float(0, 200));
var velocity = new Victor(random.float( -2, 2), random.float(-2, 2));
    
maxAPI.addHandler("motion", (...args) => 
	{
        console.log(velocity.toString());
        console.log(location.toString());
        var newLoc = location.add(velocity);
    
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
        //maxAPI.outlet("newLocationOutput",1550,1200);
        maxAPI.outlet("newLocationOutput",location.x,location.y, 5);
        
        //new Circle(0);
        //Circle.PI = 3.14159;
        Circle.prototype.area = Circle_area;
        Circle.PI = 3.14159;
        var c = new Circle(1.0); // create an instance of the Circle class
        c.r = 2.2; // set the r instance variable
        var a = c.area(); // invoke the area() instance method
        var x = Math.exp(Circle.PI); // use the PI class variable in our own computation.
    
        maxAPI.outlet("testClass",x);
});
function Circle(radius) {
    this.r = radius;
    }
function Circle_area() { return Circle.PI * this.r * this.r; }
   
function Circle_max(a,b) {
    if (a.r > b.r) return a;
    else return b;
}
