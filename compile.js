const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inbox = path.resolve(__dirname, "contracts", "example.sol");

const source = fs.readFileSync(inbox, "utf8");

module.exports = solc.compile(source, 1).contracts[":Example"];
