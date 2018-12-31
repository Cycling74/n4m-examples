const EventEmitter = require("events");

const BREAK_PAUSE = 250;
const PERIOD_PAUSE = 250;
const COMMA_PAUSE = 100;
const OTHER_PAUSE = 30;
const TEXT_SPEED = 0.5;

class TATypewriter extends EventEmitter {
	constructor() {
		super();
		this._timer = null;
		this._phrases = [];
		this._typePhrase = () => {
			if (this._phrases.length) {
				const phrase = this._phrases[0];
				let delay = BREAK_PAUSE;
				if (phrase.position < phrase.phrase.length) {
					const nextChar = phrase.phrase[phrase.position];
					delay = nextChar === "." ? PERIOD_PAUSE : (nextChar === "," ? COMMA_PAUSE : OTHER_PAUSE);
					phrase.position++;
					this.emit("type", phrase.keyword, phrase.phrase.slice(0, phrase.position));
				} else {
					this._phrases.splice(0, 1);
				}
				if (this._phrases.length) {
					this._timer = setTimeout(this._typePhrase, delay * TEXT_SPEED);
				}
			}
		};
	}

	get isTyping() {
		return this._phrases.length > 0;
	}

	flushAllPhrases() {
		if (this._timer) {
			clearTimeout(this._timer);
			this._timer = null;
		}
		this._phrases.forEach(phrase => {
			this.emit("type", phrase.keyword, phrase.phrase);
		});
		this._phrases = [];
	}

	pushPhraseToType(keyword, phrase) {
		this._phrases.push({
			keyword, phrase, position: 0
		});
		if (this._phrases.length === 1) {
			this._typePhrase();
		}
	}
}

module.exports = TATypewriter;
