const path = require("path");
const print = require("./lib/print");

const args = process.argv.slice(2);
const commandPath = path.join(__dirname, "lib", "commands", args[0]);

try {
  require(commandPath)(args.slice(1));
} catch(e) {
  print.error(e.toString());
  print.error(`There is no command named \`${args[0]}\``);
}
