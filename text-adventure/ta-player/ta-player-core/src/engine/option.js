const CONDITION_KEYS = Object.freeze({
	inventory: true,
	placeState: true,
	playerState: true
});

const UPDATE_KEYS = Object.freeze(
	Object.assign(
		{},
		CONDITION_KEYS,
		{
			location: true
		}
	)
);

const OPTION_KEYS = Object.freeze({
	complete: true,
	count: true,
	enabled: true,
	failure: true,
	id: true,
	prompt: true,
	requires: true,
	success: true,
	type: true
});

const REQUIRED_KEYS = Object.freeze({
	prompt: true
});

class TAOption {
	constructor(objectJSON) {
		this._validateDescription(objectJSON);
		this._prompt = objectJSON.prompt;
		this._failure = objectJSON.failure;
		this._success = objectJSON.success;
		this._id = objectJSON.id;
		this._count = objectJSON.count;
		this._requires = objectJSON.requires;
		this._enabled = objectJSON.enabled;
		this._complete = objectJSON.complete;
	}

	get complete() {
		return this._complete;
	}

	get failure() {
		return this._failure;
	}

	get prompt() {
		return this._prompt;
	}

	get success() {
		return this._success;
	}

	isEnabled(placeState, playerState, inventory) {
		return this._doesStateFulfill(placeState, playerState, inventory, this._enabled);
	}

	isMeetingRequirements(placeState, playerState, inventory) {
		return this._doesStateFulfill(placeState, playerState, inventory, this._requires);
	}

	_doesStateFulfill(placeState, playerState, inventory, conditions) {
		// If there are no requirements, always return true
		if (!conditions) return true;

		// If there are inventory requirements, make sure the player has the
		// required item in their inventory, or that they do not have the item
		// in their inventory if they are required not to have it.
		if (!!conditions.inventory) {
			let lenabled = true;
			Object.keys(conditions.inventory).forEach(key => {
				const inventoryItem = inventory.find(item => item === key);
				if (!!conditions.inventory[key] !== !!inventoryItem) lenabled = false;
			});
			if (!lenabled) return false;
		}

		// Same for playerState requirements...
		if (!!conditions.playerState) {
			let lenabled = true;
			Object.keys(conditions.playerState).forEach(key => {
				if (!!playerState[key] !== !!conditions.playerState[key]) lenabled = false;
			});
			if (!lenabled) return false;
		}

		// And for the local placeState as well
		if (!!conditions.placeState) {
			let lenabled = true;
			Object.keys(conditions.placeState).forEach(key => {
				if (!!placeState[key] !== !!conditions.placeState[key]) lenabled = false;
			});
			if (!lenabled) return false;
		}

		return true;
	}

	_validateDescription(objectJSON) {
		Object.keys(objectJSON).forEach(key => {
			if (!OPTION_KEYS[key]) {
				throw new Error(`Unrecognized key: ${key}`);
			}
		});
		Object.keys(REQUIRED_KEYS).forEach(key => {
			if (!objectJSON[key]) {
				throw new Error(`Missing required field ${key}`);
			}
		});
		if (!!objectJSON.enabled) {
			Object.keys(objectJSON.enabled).forEach(key => {
				if (!CONDITION_KEYS[key]) {
					throw new Error(`Unrecognized key ${key} for field "enabled"`);
				}
			});
		}
		if (!!objectJSON.requires) {
			Object.keys(objectJSON.requires).forEach(key => {
				if (!CONDITION_KEYS[key]) {
					throw new Error(`Unrecognized key ${key} for field "requires"`);
				}
			});
		}
		if (!!objectJSON.complete) {
			Object.keys(objectJSON.complete).forEach(key => {
				if (!UPDATE_KEYS[key]) {
					throw new Error(`Unrecognized key ${key} for field "complete"`);
				}
			});
		}
	}
}

module.exports = TAOption;
