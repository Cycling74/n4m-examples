const { Engine } = require("ta-player-core");
const engine = new Engine();

console.log("Text Adventure Player loaded");

// Currently, there's only one interface, and it's Max
let interface;
console.log(process.argv);
if (process.argv.length > 2) {
	interface = process.argv[2];
}

if (!!interface && interface === "max") {
	const { MaxInterface } = require("ta-player-core");
	const maxInterface = new MaxInterface();
	maxInterface.bind(engine);
} else {
	console.log(`Unsupported interface: ${interface}`);
}
