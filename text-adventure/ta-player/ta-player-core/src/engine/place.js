const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const TAOption = require("./option");

const VALID_KEYS = Object.freeze({
	"id": true,
	"description": true,
	"options": true,
	"placeState": true
});

class TAPlace {
	constructor() {
		this._id = undefined;
		this._description = undefined;
		this._options = [];
		this._state = {};
	}

	get id() {
		return this._id;
	}

	get description() {
		return this._description;
	}

	get placeState() {
		return this._state;
	}

	set placeState(newState) {
		this._state = newState;
	}

	getEnabledOptions(playerState, inventory) {
		const placeState = this._state;
		return this._options.filter(option => {
			return option.isEnabled(placeState, playerState, inventory);
		});
	}

	optionWouldSucceed(option, playerState, inventory) {
		return option.isMeetingRequirements(this._state, playerState, inventory);
	}

	_validateFileContents(filepath, fileJSON) {
		Object.keys(fileJSON).forEach((key) => {
			if (!VALID_KEYS[key]) {
				throw new Error(`Place ${path.basename(filepath)} unrecognized key ${key}`);
			}
		});
		if (!fileJSON.id) {
			throw new Error(`Place ${path.basename(filepath)} missing field "id"`);
		}
		if (!fileJSON.description) {
			throw new Error(`Place ${path.basename(filepath)} missing field "description"`);
		}
		if (typeof fileJSON.id !== "string") {
			throw new Error(`Place ${path.basename(filepath)} field "id" is not type "string"`);
		}
		if (typeof fileJSON.description !== "string") {
			throw new Error(`Place ${path.basename(filepath)} field "description" is not type "string"`);
		}
		if (!!fileJSON.options) {
			if (!Array.isArray(fileJSON.options)) {
				throw new Error(`Place ${path.basename(filepath)} field "options" must be an array`);
			}
		}
		if (!!fileJSON.placeState) {
			if (!(typeof fileJSON.placeState === "object")) {
				throw new Error(`Place ${path.basename(filepath)} field "placeState" must be an object`);
			}
		}
	}

	async initWithFile(filepath) {
		const fileraw = await readFile(filepath);
		const fileJSON = JSON.parse(fileraw.toString());
		this._validateFileContents(filepath, fileJSON);
		this._id = fileJSON.id;
		this._description = fileJSON.description;
		if(!!fileJSON.options) {
			fileJSON.options.forEach(optionJSON => {
				try {
					const option = new TAOption(optionJSON);
					this._options.push(option);
				} catch (e) {
					throw new Error(`Place ${path.basename(filepath)} option error: ${e.message}`);
				}
			});
		}
		this._state = {};
		if (!!fileJSON.placeState) {
			this._state = Object.assign(this._state, fileJSON.placeState);
		}
	}
}

module.exports = TAPlace;
