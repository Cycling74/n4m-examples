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
        var mover = new Mover();
        mover.update();
        mover.checkEdges();
        mover.display(); 
     
});



class Mover{
    constructor() 
    {
        var location = new Victor(random.float(0, 600), random.float(0, 200));
        var velocity = new Victor(random.float( -2, 2), random.float(-2, 2));
        var topspeed = 6;
    }
    update() 
    {
        location.add(velocity);
    }
    
    display()
    {
        maxAPI.outlet("newLocationOutput",location.x,location.y);
    }
    checkEdges() {

        if (location.x > width) {
        location.x = 0;
        } 
        else if (location.x < 0) {
        location.x = width;
        }
        if (location.y > height) {
        location.y = 0;
        } 
        else if (location.y < 0) {
        location.y = height;
        }
    }
}