// ---------------------------------------------------------------------
// giphy.js - Download Giphy gifs to maxAPI
//
// Check the README for information on how to get a Giphy API key,
// which you'll need in order to get any of this to work.
//
// This script uses a fork of the giphy-api NPM package, availiable here:
// https://github.com/austinkelleher/giphy-api
//
// ---------------------------------------------------------------------

// Begin loading modules


const maxAPI = require("max-api");

let dotenv_module;
try {
	dotenv_module = require("dotenv");
	dotenv_module.config();
} catch (e) {
	maxAPI.post(e, maxAPI.POST_LEVELS.ERROR);
	maxAPI.post("Could not load the dotenv module. Please be sure to send the message 'script npm install' to the node.script object to download node modules", maxAPI.POST_LEVELS.ERROR);
	process.exit(1);
}

if (!process.env.GIPHY_API_KEY) {
	maxAPI.post("No value for key GIPHY_API_KEY in .env file. Please make sure to create a file called .env with a GIPHY API key.", maxAPI.POST_LEVELS.ERROR);
	process.exit(1);
}

const giphy = require("giphy-api")(process.env.GIPHY_API_KEY);

function trimPreview(previewFilename) {
	return previewFilename.replace("-preview", "");
}

// Declare handlers

maxAPI.addHandlers({
	random: (tag) => {
		giphy.random(tag).then((res) => {
			const preview_file = maxAPI.outlet(res.data.images.preview.mp4);
			const filename = trimPreview(preview_file);
			maxAPI.outlet(["url", filename]);
		});
	},

	trending: () => {
		giphy.trending({
			limit: 25,
			rating: "pg",
			fmt: "json"
		}).then((res) => {
			const idx = Math.floor(Math.random() * 25);
			const preview_file = res.data[idx].images.preview.mp4;
			const filename = trimPreview(preview_file);
			maxAPI.outlet(["url", filename]);
		});
	}
});
