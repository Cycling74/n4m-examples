"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var add = require('vectors/add')(2)
var mag = require('vectors/mag')(2)
var sub = require('vectors/sub')(2)
var dot = require('dot-object');
var location = [100,100];
var velocity = [2.5,5];
var center = []
var mouse = [];
var magMouse;
maxAPI.addHandler("locationVelocity", (...args) => 
	{
    mouse = [args[0],args[1]];
    center = [0,0];
    magMouse= mag(mouse);
    
    console.log(mag(mouse));
    sub(mouse,center);

    //fill(0);
    //rect(0,0,m,10);
    //translate(width/2,height/2);
    //line(0,0,mouse.x,mouse.y);
    console.log(mouse[0]);
    console.log(mouse[1]);

    console.log(center[0]);
    console.log(center[1]);
    maxAPI.outlet("posX",mouse[0]);
    maxAPI.outlet("posY",mouse[1]);

    maxAPI.outlet("posCenterX",center[0]);
    maxAPI.outlet("posCenterY",center[1]);
    maxAPI.outlet("magMouse",magMouse);
    
    
});