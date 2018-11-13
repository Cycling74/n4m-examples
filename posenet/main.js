const { app, BrowserWindow } = require("electron");

function createWindow() {
	console.log("hello");
	// Create the browser window.
	const win = new BrowserWindow({ width: 800, height: 600 });

	// and load the html of the app.
	win.loadFile("./camera.html");
}

app.on("ready", createWindow);
