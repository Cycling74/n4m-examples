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
    mouse = new Victor(args[0], args[1]);
    center = new Victor(300,200);
    var multiy = new Victor(150,150);
    //var vec1 = new Victor(317,15);
    var test = new Victor(100,100);
    mouse.subtract(center);
    var vec2 = test.normalize();
    var vec3 = mouse.normalize();
//maxAPI.outlet("normVector",vec3.toString());
   // maxAPI.outlet("normVectorLenght",vec3.length());

    var multiply = vec3.multiply(multiy);



  console.log(...args);
  console.log(vec3.toString());
      maxAPI.outlet("normVectorMultiply",vec3.x,vec3.y);
   
    
    //maxAPI.outlet("normVectorLenght",vec3.length());
    //maxAPI.outlet("normVectorOutput",5);


    
});

