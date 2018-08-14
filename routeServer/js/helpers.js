// --------------------------------------------------------------------------
//
// helpers.js : provide some message-based helper functions.
//
// --------------------------------------------------------------------------

const path = require("path");
const MaxMSP = require("max-api");

MaxMSP.addHandler("cwd", () => {
  Helpers.doCWD();
})

let Helpers = {
  doCWD: function() {
    MaxMSP.outlet(["cwd", process.cwd()]);
  }
}

module.exports = Helpers;
