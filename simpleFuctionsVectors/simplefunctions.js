"use strict";

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");
var add = require('vectors/add')(2)
var pos = [0, 0]
var spd = [1, 1.5]
// When node.script gets the symbol "text", the remainder will be passed to this function.
// The "..." is  the spread operator. All of the arguments to this function will go into args as an array.

maxAPI.addHandler("text1", (...args) => {
// The outlet function sends the arguments right back to Max. Hence, echo.
	maxAPI.outlet(...args);
});

maxAPI.addHandler("textRoute", (...args) => {
	add(pos, spd)
	// The outlet function sends the arguments right back to Max. Hence, echo.
	//maxAPI.outlet("textRouteOutput", ...args);
	maxAPI.outlet("addVector",5);
});

maxAPI.addHandler("addVector", (...arg) => {
    add(pos, spd)
    maxAPI.outlet(pos);
    maxAPI.outlet("addVector",...pos);
});
