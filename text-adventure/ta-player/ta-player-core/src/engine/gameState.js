const fs = require("fs");
const path = require("path");
const TAPlace = require("./place");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

async function asyncForEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
}
class TAGameState {
	constructor() {
		this._inventory = [];
		this._places = {};
		this._playerState = {};
		this._currentPlaceId = undefined;
	}

	get currentPlace() {
		if (!this._currentPlaceId) return null;
		return this._places[this._currentPlaceId];
	}

	get currentPlaceId() {
		return this._currentPlaceId;
	}

	set currentPlaceId(currentPlaceId) {
		this._currentPlaceId = currentPlaceId;
	}

	get inventory() {
		return this._inventory;
	}

	set inventory(inventory) {
		this._inventory = inventory;
	}

	get playerState() {
		return this._playerState;
	}

	set playerState(newState) {
		this._playerState = newState;
	}

	getCurrentDescription() {
		if (!!this._currentPlaceId) {
			const place = this._places[this._currentPlaceId];
			return place.description;
		}
		return null;
	}

	getEnabledOptions() {
		if (!!this._currentPlaceId) {
			const place = this._places[this._currentPlaceId];
			return place.getEnabledOptions(this._playerState, this._inventory);
		}
		return [];
	}

	async initWithFolder(questpath) {
		const folder = await readdir(questpath);
		await this._validateFolderStructure(folder);
		if (folder.indexOf("places") !== -1) {
			const placesFolder = path.join(questpath, "places");
			const places = await readdir(placesFolder);
			await asyncForEach(places, async (placepath) => {
				const placePath = path.join(placesFolder, placepath);
				const place = new TAPlace();
				await place.initWithFile(placePath);
				this._places[place.id] = place;
			});
		}
		const questraw = await readFile(path.join(questpath, "quest.json"));
		const questJSON = JSON.parse(questraw.toString());
		this._currentPlaceId = questJSON.start;
	}

	optionWouldSucceed(option) {
		if (!this._currentPlaceId) return false;
		const currentPlace = this._places[this._currentPlaceId];
		return currentPlace.optionWouldSucceed(option, this._playerState, this._inventory);
	}

	reset() {
		this._inventory = [];
		this._places = {};
		this._playerState = {};
		this._currentPlaceId = undefined;
	}

	_validateQuestJSON(questJSON) {
		if (!questJSON.start) {
			throw new Error("quest.json missing field \"start\" -- must define a place to start");
		}
		const startId = questJSON.start;
		if (!!this._places[startId]) {
			throw new Error(`quest.json defines "start" ${startId}, but there is no place with that ID`);
		}
	}

	async _validateFolderStructure(folder) {
		if (folder.indexOf("quest.json") === -1) {
			throw new Error("Quest package must contain a file \"quest.json\"");
		}
		if (folder.indexOf("places") === -1) {
			throw new Error("Quest package must contain a folder \"places\"");
		}
	}
}

module.exports = TAGameState;
