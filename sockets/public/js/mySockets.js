// --------------------------------------------------------------------------
// This is the javascript required for interactive data retrieval from
// the Max-based Node host via websockets. It uses fairly standard jQuery
// to perform its thing...
// --------------------------------------------------------------------------
/* global $ */


var exampleSocket = new WebSocket("ws://localhost:7474");

exampleSocket.onopen = function (event) {
	console.log("sending data...");
	exampleSocket.send("Ready, willing and able!");
};

exampleSocket.onmessage = function (event) {
	let e = JSON.parse(event.data);

	// Stoplight legend:
	// -.9 thru +.9 = green
	// +/- .9 thru +/- 1.5 = yellow
	// greater than +/- 1.5 = red
	let v = (a) => {
		let m = Math.abs(a);
		if (m > 1.5) {
			return "sl-red";
		} else if (m > 0.9) {
			return "sl-yellow";
		}
		return"sl-green";

	};

	$("#value_1").text(Math.round(e.value_1 * 100) / 100);
	$("#status_1").html(`<img src="/img/${v(e.value_1)}.png">`);
	$("#value_2").text(Math.round(e.value_2 * 100) / 100);
	$("#status_2").html(`<img src="/img/${v(e.value_2)}.png">`);
	$("#value_3").text(Math.round(e.value_3 * 100) / 100);
	$("#status_3").html(`<img src="/img/${v(e.value_3)}.png">`);
};

// Managing the interaction

$(window).on("beforeunload", function () {
	exampleSocket.close();
});
