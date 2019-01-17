"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require('victor')
var center = []
var mouse = []
//var vec2 = new Victor(0,0);
maxAPI.addHandler("vectorNormlize", (...args) => 
	{
    //vec2 = new Victor(0,0);
    //vec3 = new Victor(0,0);
    mouse = new Victor(args[0], args[1]);
    center = new Victor(300,200);
    var multiy = new Victor(150,150);
    //var vec1 = new Victor(317,15);
    var test = new Victor(100,100);
    mouse.subtract(center);
    var vec2 = test.normalize();
    var vec3 = mouse.normalize();
    
    var multipyX = vec2.x * 150;
    var multipyY = vec2.y * 150;
  console.log(...args);
  console.log(vec3.toString());
    maxAPI.outlet("normVectorOutput",5);
    maxAPI.outlet("normVector",vec3.x,vec3.y);
    //maxAPI.outlet("normVectorOutput",5);


    
});

maxAPI.addHandler("vectorMag", (...args) => 
	{
    
    mouse = new Victor(args[0], args[1]);
    var test = new Victor(100,100);
	center = new Victor(300,200);
    
	/* console.log(args[0]);
    console.log(args[1]);
    console.log("centerX" + center.x);
    console.log("centerY" + center.y);
    console.log("mouseX" + mouse.x);
    console.log("mouseY" + mouse.y); */
     
	var ret = mouse.subtract(center);
    //console.log("mouseSub" + mouse.toString());
    var magOutput = mouse.magnitude();

    //console.log("magOutput")
    // console.log(magOutput);
   
    //maxAPI.outlet(magOutput);
    
    maxAPI.outlet("magVectorOutput",magOutput);


    
});