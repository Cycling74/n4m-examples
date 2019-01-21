"use strict";

const maxAPI = require("max-api");
const QRCode = require("qrcode");

maxAPI.addHandler("genQR", (...args) => {
	console.log("genQR", args);
	const text = args[0]; // here only parse first param received.
	const fileName = Date.now();
	const filePath = __dirname + "/qrcode/" + fileName + ".png";
	QRCode.toFile(filePath, text, {
		// color: {
		// 	dark: '#00F',  // Blue dots
		// 	light: '#0000' // Transparent background
		// }
	}, function (err) {
		if (err) throw err;
		console.log("qr file done");
		// maxAPI.post("fileDone", filePath);
		maxAPI.outlet("filePath", filePath);
	});
});
