const path = require("path");
const TAEngine = require("./engine/engine");
const TATypewriter = require("./engine/typewriter");
const MaxInterface = require("./interface/max-interface");

const engine = new TAEngine();
const writer = new TATypewriter();
const face = new MaxInterface();
face.bind(engine, writer);

engine.loadFolderAtPath(path.resolve(__dirname, "../../game-of-tones")).then(() => {
	console.log("Loaded game successfully");
});
