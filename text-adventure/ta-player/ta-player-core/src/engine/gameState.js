class GameState {
	constructor() {
		this._inventory = [];
		this.reset();
	}

	get inventory() {
		return this._inventory;
	}

	reset() {
		this._inventory = [];
	}
}