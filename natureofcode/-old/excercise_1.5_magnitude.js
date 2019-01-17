"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var add = require('vectors/add')(2)
var mag = require('vectors/mag')(2)
var sub = require('vectors/sub')(2)
var dot = require('dot-object');
var Victor = require('victor')
var heading = require("vectors/heading")(2)
var location = [100,100];
var velocity = [2.5,5];
var center = []
var mouse = [];
var magMouse;
maxAPI.addHandler("vectorMag", (...args) => 
	{
    
    var mouse = new Victor(args[0], args[1]);
    var test = new Victor(100,100);
	center = new Victor(300,200);
    
	console.log(args[0]);
    console.log(args[1]);
    console.log("centerX" + center.x);
    console.log("centerY" + center.y);
    console.log("mouseX" + mouse.x);
    console.log("mouseY" + mouse.y);
     
	var ret = mouse.subtract(center);
    console.log("mouseSub" + mouse.toString());
    var magOutput = mouse.magnitude();

console.log("magOutput")
     console.log(magOutput);
   
    //maxAPI.outlet(magOutput);
    maxAPI.outlet("magVectorOutput",magOutput);
    
    //maxAPI.outlet("magVectorOutput",magOutput);


    
});