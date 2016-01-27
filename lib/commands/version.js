const path = require("path");
const print = require("../print");
const packagePath = path.join(__dirname, "..", "..", "package.json");
const packageInfo = require(packagePath);

module.exports = function run() {
  print.info(`Camus version ${print.boldColor(packageInfo.version)}`);
}
