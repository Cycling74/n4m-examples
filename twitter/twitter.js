// Twitter wrapper, so you can tweet from your patch

// Begin loading modules

const Max = require('max-api');

let dotenv_module;
try {
    dotenv_module = require('dotenv');
    dotenv_module.config();
} catch (e) {
    Max.post(e, "ERROR");
    Max.post("Could not load the dotenv module. Please be sure to send the message 'script npm install' to the node.script object to download node modules", "ERROR");
    process.exit(1);
}

['TWITTER_CONSUMER_KEY', 'TWITTER_CONSUMER_SECRET', 'TWITTER_ACCESS_TOKEN', 'TWITTER_ACCESS_TOKEN_SECRET'].forEach(key => {
	if (!process.env[key]) {
		Max.post(`No value for ${key} in .env file. Please make sure to create a file called .env with the appropriate key-value pair.`, "ERROR");
		process.exit(0);
	}
});

const Twitter = require('twitter');
const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const handlers = {
	getTimeline: () => {
		client.get('statuses/user_timeline', {}, function(error, tweets, response) {
			if (!error) {
				const output = ["tweets"];
				tweets.forEach(tweet => {
					output.push(tweet.text);
				});
				Max.outlet(output);
			} else {
				Max.post(error, "ERROR");
			}
		});
	},

	postStatus: (status) => {
		const params = { status };
		if (status) {
			client.post('statuses/update', params, function(error, tweet, response) {
				if (!error) {
					Max.outlet(tweet);
				} else {
					Max.post(error, "ERROR");
				}
			});
		}
	},
}

Max.addHandlers(handlers);
