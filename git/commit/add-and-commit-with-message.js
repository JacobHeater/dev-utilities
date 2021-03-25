const { cmd } = require('../../stdio/cmd');
const { argv } = require('yargs');

if (require.main === module) {
  addAndCommitWithMessage(argv.message);
}

module.exports = {
  addAndCommitWithMessage
};

function addAndCommitWithMessage(message) {
  if (!message || typeof message !== 'string') {
    console.error(`Argument 'message' must be of type string, and must have a value.`);
    process.exit(1);
  }

  let io = cmd(`git add .`);
  console.log(io);
  io = cmd(`git commit -m "${message}"`);
  console.log(io);
}
