const chalk = require("chalk");

function _print(message) {
  console.log(`\n${message}\n`);
}

module.exports = {
  errorColor: chalk.bold.red,
  boldColor: chalk.bold,

  error(message) {
    _print(this.errorColor(message));
  },

  info(message) {
    _print(message);
  }
};
