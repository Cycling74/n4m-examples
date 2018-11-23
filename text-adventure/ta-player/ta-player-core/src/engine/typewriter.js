const EventEmitter = require("events");

const PERIOD_PAUSE = 250;
const COMMA_PAUSE = 100;
const OTHER_PAUSE = 30;

class TATypewriter extends EventEmitter {
	constructor() {
		super();
		this._timers = {};
		this._phrases = {};
		this._positions = {};
		this._typePhrase = (keyword) => {
			if (this._positions[keyword] < this._phrases[keyword].length) {
				const nextChar = this._phrases[keyword][this._positions[keyword]];
				const delay = nextChar === "." ? PERIOD_PAUSE : (nextChar === "," ? COMMA_PAUSE : OTHER_PAUSE);
				this._positions[keyword]++;
				this.emit("type", keyword, this._phrases[keyword].slice(0, this._positions[keyword]));
				this._timers[keyword] = setTimeout(this._typePhrase, delay, keyword);
			} else {
				delete this._phrases[keyword];
				delete this._timers[keyword];
			}
		};
	}

	_flushPhraseForKeyword(keyword) {
		if (!!this._phrases[keyword]) {
			this.emit("type", keyword, this._phrases[keyword]);
			if (!!this._timers[keyword]) clearInterval(this._timers[keyword]);
			delete this._timers[keyword];
			delete this._positions[keyword];
			delete this._phrases[keyword];
		}
	}

	beginTypingPhrase(keyword, phrase) {
		this._flushPhraseForKeyword(keyword);
		this._phrases[keyword] = phrase;
		this._positions[keyword] = 0;
		this._typePhrase(keyword);
	}

	flushAllPhrases() {
		Object.keys(this._phrases).forEach(phrase => {
			this._flushPhraseForKeyword(phrase);
		});
	}
}

module.exports = TATypewriter;
