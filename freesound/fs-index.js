// ---------------------------------------------------------------------
// fs-index.js - Search and download from Freesound.org
//
// Check the README for information on how to get a Freesound API key,
// which you'll need in order to get any of this to work.
// ---------------------------------------------------------------------

const maxAPI = require("max-api");

// Attempt to load the dotenv module, which is needed to load the .env file containing the Freesound API keys.
let dotenv_module;
try {
	dotenv_module = require("dotenv");
	dotenv_module.config();
} catch (e) {
	maxAPI.post(e, maxAPI.POST_LEVELS.ERROR);
	maxAPI.post("Could not load the dotenv module. Please be sure to send the message 'script npm install' to the node.script object to download node modules", maxAPI.POST_LEVELS.ERROR);
	process.exit(1);
}

// Make sure that the API keys are loaded. Dotenv will put them in process.env if they are.
if (!process.env.FREESOUND_CLIENT_ID) {
	maxAPI.post("No value for key FREESOUND_CLIENT_ID in .env file. Please make sure to create a file called .env with a Freesound API Client ID.", maxAPI.POST_LEVELS.ERROR);
	process.exit(1);
}

if (!process.env.FREESOUND_CLIENT_KEY) {
	maxAPI.post("No value for key FREESOUND_CLIENT_KEY in .env file. Please make sure to create a file called .env with a Freesound API Key.", maxAPI.POST_LEVELS.ERROR);
	process.exit(1);
}

// Create an Axios HTTP Request instance using the API keys from the process.
const axios = require("axios").default;
const freesoundRequest = axios.create({
	baseURL: "https://freesound.org/apiv2",
	headers: {
		Authorization: `Token ${process.env.FREESOUND_CLIENT_KEY}`
	}
});

const fs = require("fs");
const tmp = require("tmp");
const path = require("path");
const { promisify } = require("util");

const tmpName = promisify(tmp.tmpName);

// Freesound won't let us download directly to a Max buffer, so we have to put the file somewhere.
async function saveToFile(url, filepath) {
	const writer = fs.createWriteStream(filepath);
	const response = await axios.get(url, { responseType: "stream" });
	response.data.pipe(writer);
	return new Promise((resolve, reject) => {
		writer.on("finish", resolve);
		writer.on("error", reject);
	});
}

// Declare handlers
maxAPI.addHandlers({
	search: async (query, duration) => {
		try {
			// See https://freesound.org/docs/api/resources_apiv2.html#search-resources
			// For Details on the Freesound API Query Params
			const { data } = await freesoundRequest.get("/search/text/", {
				params: {
					filter: duration ? `duration:[0.0 TO ${duration}]` : null,
					fields: "id,name,url,previews",
					page: 1,
					query,
					sort: "score"
				}
			});

			const results = data.results;
			// Output the results as a list
			await maxAPI.outlet(["search", query, results]);
		} catch (err) {
			await maxAPI.post("Failed to search Freesound:", maxAPI.POST_LEVELS.ERROR);
			await maxAPI.post(err.message, maxAPI.POST_LEVELS.ERROR);
		}
	},
	preview: async (key, url) => {
		try {
			await maxAPI.outlet("preview", key, "start", url);
			const dlPath = await tmpName({ postfix: ".mp3" });
			await saveToFile(url, dlPath);
			await maxAPI.outlet("preview", key, "complete", url, dlPath);
		} catch (err) {
			await maxAPI.post(`Failed to preview file: ${key}`, maxAPI.POST_LEVELS.WARN);
			await maxAPI.post(err.message, maxAPI.POST_LEVELS.WARN);
		}
	},
	download: async (key, name, url, dlPath) => {
		try {
			await maxAPI.outlet("download", key, "start", url, dlPath);
			const outpath = path.join(dlPath, `${name}.mp3`);
			await saveToFile(url, outpath);
			await maxAPI.outlet("download", key, "complete", url, dlPath);
		} catch (err) {
			await maxAPI.post(err.message, maxAPI.POST_LEVELS.WARN);
		}
	}
});
