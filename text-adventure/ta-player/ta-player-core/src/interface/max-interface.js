const maxApi = require("max-api");

class MaxInterface {
	bind(engine, typewriter) {
		engine.on("text", (keyword, text) => {
			typewriter.pushPhraseToType(keyword, text);
		});
		engine.on("clear", () => maxApi.outlet("clear"));
		typewriter.on("type", (keyword, phrase) => {
			maxApi.outlet(keyword, phrase);
		});
		maxApi.outlet("clear");
		maxApi.addHandlers({
			debug: () => {
				typewriter.pushPhraseToType("text", engine.someDescriptionJustToMakeSureItsWorking);
			},
			doOptionAtIndex: (idx) => {
				if (typewriter.isTyping) {
					typewriter.flushAllPhrases();
				} else {
					engine.doEnabledOptionAtIndex(idx);
				}
			},
			flush: () => {
				typewriter.flushAllPhrases();
			}
		});
	}
}

module.exports = MaxInterface;
