const { cmd } = require('../../stdio/cmd');

module.exports = {
  revertCommit
};

function revertCommit(hash) {
  if (!hash) {
    console.error(`You must provide a commit hash to revert`);
    process.exit(1);
  }

  let io = cmd(`git revert ${hash}`);

  console.log(io);
}
