const { cmd } = require('../../../io/cmd');
const { fetchAndPrune } = require('../../fetch/fetch-and-prune');
const { getMainBranchName } = require('../get-main-branch-name');

if (require.main === module) {
  gitCheckoutMainAndSync();
}

module.exports = {
  gitCheckoutMainAndSync
};

function gitCheckoutMainAndSync() {
  console.log(cmd(`git checkout ${getMainBranchName()}`));
  fetchAndPrune();
  console.log(cmd(`git pull origin ${getMainBranchName()}`));
}
