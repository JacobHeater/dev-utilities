const { getCurrentBranch } = require('../get-current-branch');
const { argv } = require('yargs');
const readline = require('readline-sync');
const { cmd } = require('../../../io/cmd');
const { getMainBranchName } = require('../get-main-branch-name');

if (require.main === module) {
  if (!argv.branch) {
    console.warn('No branch name was provided. Please ensure you have passed a branch name.');
    process.exit(1);
  }

  checkoutNewBranch(argv.branch.trim());
}

module.exports = {
  checkoutNewBranch
};

function checkoutNewBranch(branch, checkMain = true) {
  if (checkMain && getCurrentBranch().clean !== getMainBranchName() && !readline.keyInYN(`You are not currently on ${getMainBranchName()}. Do you wish to continue?`)) {
    console.log('Canceled.');
    process.exit(0);
  }

  console.log(cmd(`git checkout -b "${branch}"`));
}
