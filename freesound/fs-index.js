// ---------------------------------------------------------------------
// fs-index.js - Search and download from Freesound.org
//
// Check the README for information on how to get a Freesound API key,
// which you'll need in order to get any of this to work.
//
// This script uses a fork of the freesound NPM package, availiable here:
// https://github.com/Girlfriends/freesound.js
//
// ---------------------------------------------------------------------

// Begin loading modules


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
if (!process.env.FREESOUND_CLIENT_KEY) {
	maxAPI.post("No value for key FREESOUND_CLIENT_KEY in .env file. Please make sure to create a file called .env with a Freesound API Client key.", maxAPI.POST_LEVELS.ERROR);
	process.exit(1);
}

if (!process.env.FREESOUND_CLIENT_SECRET) {
	maxAPI.post("No value for key FREESOUND_CLIENT_SECRET in .env file. Please make sure to create a file called .env with a Freesound API Client Secret.", maxAPI.POST_LEVELS.ERROR);
	process.exit(1);
}

// Create a freesound client object, using the keys from the process.
const freesound = require("freesound");
freesound.setClientSecrets(process.env.FREESOUND_CLIENT_KEY, process.env.FREESOUND_CLIENT_SECRET);

const fs = require("fs");
const http = require("http");
const tmp = require("tmp");
const path = require("path");

// Freesound won't let us download directly to a Max buffer, so we have to put the file somewhere.
function saveToFile(url, filepath, onSuccess, onErr) {

	let audio = new Buffer("");
	const readRequest = http.request(url, res => {
		res.on("data", data => {
			audio = Buffer.concat([audio, data]);
		});
		res.on("end", () => {
			fs.writeFile(filepath, audio, {
				encoding: "utf8",
				flag: "w+"
			}, (writeerr) => {
				if (writeerr) {
					onErr(writeerr);
				} else {
					onSuccess();
				}
			});
		});
	});

	readRequest.end();
}

// Declare handlers
maxAPI.addHandlers({
	search: (query, duration) => {
		const fields = "id,name,url,previews";
		const page = 1;
		const filter = duration ? encodeURIComponent(`duration:[0.0 TO ${duration}]`) : "";
		const sort = "score";
		const token = process.env.FREESOUND_CLIENT_SECRET;
		freesound.textSearch(query, {
			page,
			filter,
			sort,
			fields,
			token
		}, (response) => {
			const results = response.results;
			// const count = results.length;

			// Output the results as a list
			maxAPI.outlet(["search", query, results]);

			// const idx = Math.floor(Math.random() * count);
			// const result = results[idx];
			// const sndurl = result.previews["preview-hq-mp3"];
			// maxAPI.outlet(["url", result.url]);
			// saveToTemporaryFile(sndurl, ".mp3", path => {
			// 	maxAPI.outlet([query, path]);
			// }, err => {
			// 	maxAPI.post(err, maxAPI.POST_LEVELS.WARN);
			// });
		}, (err) => {
			maxAPI.post(err);
		});
	},
	preview: (key, url) => {
		maxAPI.outlet("preview", key, "start", url);
		tmp.tmpName({
			postfix: ".mp3"
		}, (err, dlpath) => {
			if (err) {
				maxAPI.post(err, maxAPI.POST_LEVELS.WARN);
			}
			saveToFile(url, dlpath, () => {
				maxAPI.outlet("preview", key, "complete", url, dlpath);
			}, dlerr => {
				maxAPI.post(dlerr, maxAPI.POST_LEVELS.WARN);
			});
		});
	},
	download: (key, name, url, dlpath) => {
		maxAPI.outlet("download", key, "start", url, dlpath);
		const outpath = path.join(dlpath, `${name}.mp3`);
		saveToFile(url, outpath, () => {
			maxAPI.outlet("download", key, "complete", url, outpath);
		}, dlerr => {
			maxAPI.post(dlerr, maxAPI.POST_LEVELS.WARN);
		});
	}
});
