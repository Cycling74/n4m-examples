class TAPlace {
	constructor(globalState) {
		this._globalState = globalState;
		this._contents = [];
		this.initialize();
	}
	initialize() { }
	get description() { return "Override me"; }
	get globalState() { return this._globalState; }
	get options() { return {}; } // Override me as well

	addItem(item) {
		this._contents.push(item);
	}

	removeItem(item) {
		const idx = this._contents.indexOf(item);
		if (idx !== -1) {
			this._contents.splice(idx, 1);
		}
	}

	contentsOfClass(itemClass) {
		return this._contents.filter(item => item instanceof itemClass);
	}
}

module.exports = TAPlace;
