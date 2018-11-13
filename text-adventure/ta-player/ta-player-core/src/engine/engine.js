const EventEmitter = require("events");

class TAEngine extends EventEmitter {
	constructor() {
		super();
		this._currentPlace = null;
	}

	get someDescriptionJustToMakeSureItsWorking() {
		return "This is a string or something";
	}

	get currentPlace() { return this._currentPlace; }
	set currentPlace(place) {
		this._currentPlace = place;
	}

	get placeDescription() {
		if (!this.currentPlace) {
			return "";
		} else {
			return this.currentPlace.description;
		}
	}

	get placeOptions() {
		if (!this.currentPlace) {
			return [];
		} else {
			return this.currentPlace.options;
		}
	}

	doOption(optionIndex) {
		if (!!this.currentPlace) {
			const options = this.currentPlace.options;
			if (options.length > optionIndex) {
				const option = options[optionIndex];
				if (option.action) option.action();
				if (option.description) {
					this.emit("action", option.description);
				}
			}
		}
	}
}

module.exports = TAEngine;
