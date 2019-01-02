// ---------------------------------------------------------------------
// twitter.js - Tweet from your patch
//
// Check the README for information on how to get a Twitter API key,
// which you'll need in order to get any of this to work.
//
// This script uses the twitter NPM package, availiable here:
// https://github.com/desmondmorris/node-twitter
//
// ---------------------------------------------------------------------


const maxAPI = require("max-api");

// Attempt to load the dotenv module, which is needed to load the .env file containing the Twitter API keys.
let dotenv_module;
try {
	dotenv_module = require("dotenv");
	dotenv_module.config();
} catch (e) {
	maxAPI.post(e, maxAPI.POST_LEVELS.ERROR);
	maxAPI.post("Could not load the dotenv module. Please be sure to send the message 'script npm install' to the node.script object to download node modules", maxAPI.POST_LEVELS.ERROR);
	process.exit(1); // Exit with an error if dotenv is not installed.
}

// Make sure that the API keys are loaded. Dotenv will put them in process.env if they are.
["TWITTER_CONSUMER_KEY", "TWITTER_CONSUMER_SECRET", "TWITTER_ACCESS_TOKEN", "TWITTER_ACCESS_TOKEN_SECRET"].forEach(key => {
	if (!process.env[key]) {
		maxAPI.post(`No value for ${key} in .env file. Please make sure to create a file called .env with the appropriate key-value pair.`, maxAPI.POST_LEVELS.ERROR);
		process.exit(0); // Exit without an error if the keys are missing
	}
});

const Twitter = require("twitter");

// Create a twitter client object, using the keys from the process.
const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// Add the handlers. This defines how the running Node script will respond to messages from maxAPI.
const handlers = {

	// When the script gets the message "getTimeline", call this function.
	getTimeline: () => {
		client.get("statuses/user_timeline", {}, (error, tweets) => {
			if (!error) {
				const output = ["timeline"];
				tweets.forEach(tweet => {
					output.push(tweet.text);
				});
				maxAPI.outlet(output);
			} else {
				maxAPI.post(error, maxAPI.POST_LEVELS.ERROR);
			}
		});
	},

	// When the script gets the message "postStatus", call this function.
	// The status argument will be whatever comes after the postStatus message. In maxAPI, we use the tosymbol object to
	// turn a list of symbols into a single symbol.
	postStatus: (status) => {
		const params = {
			status
		};
		if (status) {
			client.post("statuses/update", params, (error, tweet) => {
				if (!error) {
					maxAPI.outlet("tweet", tweet);
				} else {
					maxAPI.post(error, maxAPI.POST_LEVELS.ERROR);
				}
			});
		}
	}
};

maxAPI.addHandlers(handlers);
