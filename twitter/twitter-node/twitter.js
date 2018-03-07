const Twitter = require('twitter');
const Max = require("max-api");

Max.post("Something else");

let connected = false;
let client = null;

function credentialsAreWellFormatted(creds) {
	if (!creds.credentials) return false;
	if (!creds.credentials.consumer_key) return false;
	if (!creds.credentials.consumer_secret) return false;
	if (!creds.credentials.access_token_key) return false;
	if (!creds.credentials.access_token_secret) return false;
	return true;
}

const credentialsDescription = `credentials.json
should be a json file with a key 'credentials'
which should have the keys 'consumerKey', 'consumerSecret'
'accessToken' and 'accessSecret'. Something like:
{
	'credentials': {
		'consumer_key': xxxxxxxxx
		'consumer_secret': xxxxxxxxx
		'access_token_key': xxxxxxxxx
		'access_token_secret': xxxxxxxxx
	}
}
Learn more at developer.twitter.com`;

const handlers = {
	connect: () => {
		Max.post("Made it this far...");
		if (connected) {
			Max.post("Already connected");
			return;
		} else {
			let credentials;
			try {
				credentials = require('./credentials.json');
				Max.post("Read credentials successfully");
			} catch (e) {
				Max.post(e);
			}
			if (!credentials) {
				Max.post("Missing credentials.json file");
				Max.post(credentialsDescription);
				return;
			}
			const valid = credentialsAreWellFormatted(credentials);
			if (!valid) {
				Max.post(credentialsDescription);
				return;
			}

			Max.post("Making twitter client");
			client = new Twitter(credentials.credentials);
			if (client) {
				connected = true;
				Max.outlet(["connected", 1]);
			} else {
				Max.post("Coult not create Twitter client");
			}
		}
	},

	disconnect: () => {
		connected = false;
		client = null;
		Max.outlet(["connected", 0]);
	},

	getTimeline: (user) => {
		const params = {screen_name: user};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
				Max.outlet(tweets);
			} else {
				Max.post(error);
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
					Max.post(error);
				}
			});
		}
	},
}

Max.addHandlers(handlers);
