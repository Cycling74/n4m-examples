"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var Victor = require('victor')
var center = new Victor(300, 200);
var mouse = [];
maxAPI.addHandler("locationVelocity", (...args) => 
	{
        var mouse = new Victor(args[0], args[1]);
        var ret = mouse.subtract(center);
        
        var vectorArray= [ret.x,ret.y];
	    var ret= mouse.magnitude();
        
        maxAPI.outlet(ret);
        maxAPI.outlet("magVectorOutput",ret);
    
});