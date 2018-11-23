const maxApi = require("max-api");

class MaxInterface {
	bind(engine, typewriter) {
		engine.on("text", (text) => {
			typewriter.beginTypingPhrase("text", text);
		});
		typewriter.on("type", (keyword, phrase) => {
			maxApi.outlet(keyword, phrase);
		});
		maxApi.addHandlers({
			debug: () => {
				typewriter.beginTypingPhrase("text", engine.someDescriptionJustToMakeSureItsWorking);
			},
			placeDescription: () => {
				typewriter.beginTypingPhrase("placeDescription", engine.currentPlaceDescription());
			},
			optionPrompts: () => {
				const options = engine.enabledOptions();
				const prompts = options.map((option) => option.prompt);
				maxApi.outlet("optionPrompts", prompts);
			}
		});
	}
}

module.exports = MaxInterface;
