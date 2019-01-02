

// Require the max-api module to connect to Max via node.script
const maxAPI = require("max-api");

// When node.script gets the symbol "text", the remainder will be passed to this function.
// The "..." is the spread operator. All of the arguments to this function will go into args as an array.
maxAPI.addHandler("text", (...args) => {

	//
	// The outlet function sends the arguments right back to Max. Hence, echo.
	maxAPI.outlet(...args);
});
