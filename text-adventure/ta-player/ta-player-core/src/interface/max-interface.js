const maxApi = require("max-api");

class MaxInterface {
	bind(engine) {
		maxApi.addHandlers({
			debug: () => {
				maxApi.outlet(engine.someDescriptionJustToMakeSureItsWorking);
			}
		});
	}
}

module.exports = MaxInterface;
