// --------------------------------------------------------------------------
//
// message_broker.js : given a message, transmit it to any registered
//                     listeners. Keep track of attachments, and kill
//                     any listeners that go 'dead'.
//
// --------------------------------------------------------------------------


let uuidv1 = require("uuid/v1");

let MessageBroker = {
	listeners: [],

	// add a listener with a callback
	// ------------------------------
	addListener: function (func) {
		let tmp = {
			uuid: uuidv1(),
			callback: func
		};
		this.listeners.push(tmp);
		return tmp.uuid;
	},

	// find and remove a listener by id
	// --------------------------------
	removeListener: function (id) {
		this.listeners.forEach((v, i, a) => {
			if (v.uuid === id) {
				a.splice(i, 1);
			}
		});
	},

	// When a message comes in, send it to the listener that has a matching
	// uuid field. Reject the message if it is not the proper type, or if
	// it doesn't have a uuid field.
	brokerMessage: function (args = []) {
		// we only accept dictionaries as input
		if (args[0] !== "dict" || args.length !== 2) {
			console.log("invalid message - only dictionaries accepted as messages");
			return;
		}

		const content = args[1];

		// the object has to have a uuid property
		if (!content.hasOwnProperty("uuid")) {
			console.log("invalid message - dictionary must contain a uuid value");
			return;
		}

		// the uuid has to be 'all', or be in the current list of listeners
		if ((content.uuid !== "all") && !this.listeners.some(e => e.uuid === content.uuid)) {
			console.log("invalid message - the passed uuid does not match any listeners");
			return;
		}

		// spin through the listeners and send out matches
		this.listeners.forEach((v, i) => {
			try {
				if ((content.uuid === "all") || (content.uuid === v.uuid)) {
					v.callback(content);
				}
			}
			catch (e) {
				console.log(`removing listener ${v.uuid}, error ${e}`);
				this.removeListener(v.uuid);
			}
		});
	}

};

module.exports = MessageBroker;
