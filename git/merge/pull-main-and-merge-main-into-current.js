const { cmd } = require('../../io/cmd');
const { gitCheckoutMainAndSync } = require('../branch/checkout/checkout-main-and-sync');
const { gitToggleBranch } = require('../branch/checkout/toggle-branch');
const { getMainBranchName } = require('../branch/get-main-branch-name');

if (require.main === module) {
  gitPullMainAndMergeMainIntoCurrent();
}

module.exports = {
  gitPullMainAndMergeMainIntoCurrent
};

function gitPullMainAndMergeMainIntoCurrent() {
  gitCheckoutMainAndSync();
  gitToggleBranch();
  console.log(cmd(`git merge ${getMainBranchName()}`));
}
