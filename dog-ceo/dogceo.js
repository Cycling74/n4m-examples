

// fs is a Node module for working with the file system
const fs = require("fs");

// https is a Node module. It simplifies the process of making https requests.
const https = require("https");

// os is also a Node module. It lets us get operating system information, like
// the path to the temporary directory.
const os = require("os");

// Yet another Node module, path helps with things like resolving relative paths
const path = require("path");

// Another node module! URL if for working with URL's of course.
// You'll notice a slightly different syntax here, that actually assigns the value
// of the variable URL to the URL property of the url module. For more info, see
// https://nodejs.org/docs/latest-v8.x/api/url.html#url_url_pathname
const {
	URL
} = require("url");

// max-api is only available when running this script from Max.
const maxApi = require("max-api");

const BASE_URL = "https://dog.ceo/api/";

// Promises are a useful JavaScript construct for handling functions that do
// not return until some asynchronous process is completed.
function request(requrl) {
	return new Promise((resolve, reject) => {
		let data = "";
		https.get(requrl, (res) => {
			res.on("data", (d) => {
				data = data + d;
			});

			res.on("end", () => {
				resolve(JSON.parse(data));
			});
		}).on("error", e => {
			reject(e);
		});
	});
}

function download(uri, filepath) {
	return new Promise((resolve, reject) => {
		https.get(uri, (resp) => {
			const headers = JSON.stringify(resp.headers);
			if (resp.statusCode === 200) {
				const ws = fs.createWriteStream(filepath);
				resp
					.on("data", chunk => ws.write(chunk))
					.on("end", () => {
						ws.end();
						resolve(filepath);
					})
					.on("error", e => reject(e));
			} else if (resp.statusCode === 307) { // redirect
				const redirectURL = headers.location;
				resolve(download(redirectURL, filepath));
			} else {
				reject("Failed to download file: " + resp.statusMessage);
			}
		});
	});
}

// addHandler (and the convenient addHandlers) allow you to call functions from
// Max. Here, "breed" is bound to an anonymous function that retrieves images
// of dogs, categorized by breed.
maxApi.addHandler("breed", (name) => {
	const apiurl = `${BASE_URL}breed/${name}/images/random`;

	// This .then .then syntax is JavaScript Promise syntax. It lets us do
	// a sequence of asynchronous tasks (tasks that don't immediately return)
	// one after the other, only starting when the previous task completes.
	// This first function tries to fetch the URL of a random dog photo
	request(apiurl)
		.then((data) => {
			if (data.status === "success") {
				return data.message;
			}
			throw new Error("Error fetching dog image: " + data.message);
		})

		// Next, we try to download the image to the temporary directory.
		// We could send the URL straight to Max--on OS X anyway the jit.movie
		// object can read URL's directly. However, this won't work on windows
		// (as of the time of writing this comment, anyway). So intsead, we
		// download the image to a temporary directory, then send Max the file.
		.then((imgurl) => {
			const imgurlPath = (new URL(imgurl)).pathname;
			const filename = path.basename(imgurlPath);
			return download(imgurl, path.join(os.tmpdir(), filename));
		})

		// Finally, send the full path back to Max, with the dog selector
		.then(pathname => maxApi.outlet("dog", pathname))

		// If something went wrong, post an error to the Max console
		.catch(e => maxApi.post(e.message, maxApi.POST_LEVELS.WARN));
});
