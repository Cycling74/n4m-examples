const { TAPlace } = require("ta-player-core");
const Skull = require("../items/skull");
class Dungeon extends TAPlace {
	initialize() {
		this.addItem(new Skull());
	}

	get description() {
		let desc = "You find yourself in a cold, dark dungeon. All around you are fragments of bone, old CD-R's, " +
		"and frayed pieces of cable."
		return desc;
	}

	get options() {
		return [
			{
				prompt: "Open the door",
				description: "You pull and pull on the door, but nothing happens. Well, you do get a little tired."
			},
			{
				prompt: "Pick up the skull",
				description: "For some reason, you pick up the skull. It feels bony and solid.",
				enabled: () => {
					return this.contentsOfClass(Skull).length > 0;
				},
				action: () => {
					const skull = this.contentsOfClass(Skull)[0];
					this.removeItem(skull);
					this.globalState.inventory.push(skull);
				}
			}
		]
	}
}

module.exports = Dungeon;
