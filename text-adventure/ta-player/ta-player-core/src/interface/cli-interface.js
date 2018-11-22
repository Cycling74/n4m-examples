const TAEngine = require("../engine/engine");

const engine = new TAEngine();
engine.loadFolderAtPath(process.argv[2]).then(() => {
	console.log(engine.currentPlaceDescription());
	engine.enabledOptions().forEach(option => {
		console.log(option.prompt);
	});
	engine.doEnabledOptionAtIndex(1);
	console.log(engine.inventory);
	engine.enabledOptions().forEach(option => {
		console.log(option.prompt);
	});
	engine.doEnabledOptionAtIndex(1);
	engine.enabledOptions().forEach(option => {
		console.log(option.prompt);
	});
	console.log(engine.inventory);
	engine.doEnabledOptionAtIndex(1);
	console.log(engine.currentPlaceDescription());
});
