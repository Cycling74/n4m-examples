const maxApi = require("max-api");

class MaxInterface {
	bind(engine) {
		maxApi.addHandlers({
			debug: () => {
				maxApi.outlet(engine.someDescriptionJustToMakeSureItsWorking);
			},
			placeDescription: () => {
				maxApi.outlet("placeDescription", engine.placeDescription);
			},
			optionPrompts: () => {
				const options = engine.placeOptions;
				const prompts = options.map((option) => option.prompt);
				maxApi.outlet("optionPrompts", prompts);
			}
		});
	}
}

module.exports = MaxInterface;
