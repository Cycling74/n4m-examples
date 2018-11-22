const TAGameState = require("./gameState");
const EventEmitter = require("events");

class TAEngine extends EventEmitter {
	constructor() {
		super();
		this._gameState = new TAGameState();
	}

	get inventory() {
		return this._gameState.inventory;
	}

	get someDescriptionJustToMakeSureItsWorking() {
		return "This is a string or something";
	}

	_updatedInventory(oldInventory, changes) {
		// Each change is just gonna be how much of an item with a given ID you
		// need to add or remove from your inventory
		const newInventory = oldInventory.slice();
		Object.keys(changes).forEach(key => {
			let delta = changes[key];
			if (delta > 0) {
				while (delta > 0) {
					newInventory.push(key);
					delta--;
				}
			}
			else if (delta < 0) {
				while (delta < 0) {
					const matchingIdx = newInventory.findIndex(invKey => invKey === key);
					if (matchingIdx !== -1) newInventory.splice(matchingIdx, 1);
					delta++;
				}
			}
		});
		return newInventory;
	}

	_updatedState(oldState, changes) {
		const updatedProperties = {};
		Object.keys(changes).forEach(key => {
			if (typeof changes[key] === "number") {
				updatedProperties[key] = (oldState[key] || 0) + changes[key];
			} else {
				updatedProperties[key] = changes[key];
			}
		});
		return Object.assign(oldState, changes);
	}

	currentPlaceDescription() {
		return this._gameState.getCurrentDescription();
	}

	doEnabledOptionAtIndex(idx) {
		const option = this._gameState.getEnabledOptions()[idx];

		// Check to see if the option would be successful given the game state.
		if (this._gameState.optionWouldSucceed(option)) {
			// Print out the success message
			if (!!option.success) {
				this.post(option.success);
			}
			// Check if there's anything to update on completion
			if (!!option.complete) {
				if (!!option.complete.playerState) {
					const newPlayerState = this._updatedState(
						this._gameState.playerState,
						option.complete.playerState
					);
					this._gameState.playerState = newPlayerState;
				}
				if (!!option.complete.placeState) {
					const newPlaceState = this._updatedState(
						this._gameState.currentPlace.placeState,
						option.complete.placeState
					);
					this._gameState.currentPlace.placeState = newPlaceState;
				}
				if (!!option.complete.inventory) {
					const updatedInventory = this._updatedInventory(
						this._gameState.inventory,
						option.complete.inventory
					);
					this._gameState.inventory = updatedInventory;
				}
				if (!!option.complete.location) {
					this._gameState.currentPlaceId = option.complete.location;
				}
			}
		} else {
			if (!!option.failure) {
				this.post(option.failure);
			}
		}
	}

	enabledOptions() {
		return this._gameState.getEnabledOptions();
	}

	async loadFolderAtPath(folderpath) {
		this._gameState.reset();
		await this._gameState.initWithFolder(folderpath);
	}

	post(message) {
		console.log(message);
	}

	stateAsString() {
		return `${this._gameState.inventory} \n ${this._gameState.currentPlace.description} \n ${this._gameState.getEnabledOptions}`;
	}
}

module.exports = TAEngine;
