const { revertCommit } = require('./revert-commit');
const { popLastCommit } = require('../commit/pop-last-commit');

if (require.main === module) {
  revertLastCommit();
}

module.exports = {
  revertLastCommit
};

function revertLastCommit() {
  const hash = popLastCommit();

  if (!hash) {
    console.warn(`No hash found on the commit log. Exiting.`)
    process.exit(0);
  }

  revertCommit(hash);
}