const { cmd } = require('../../../io/cmd');
const { fetchAndPrune } = require('../../fetch/fetch-and-prune');
const { getMainBranchName, MASTER_BRANCH_NAME } = require('../get-main-branch-name');

if (require.main === module) {
  try {
    gitCheckoutMainAndSync();
  } catch (e) {
    console.warn(`Could not checkout branch "${getMainBranchName()}" to update. Trying "${MASTER_BRANCH_NAME}."`);
    gitCheckoutMasterAndSync();
  }
}

module.exports = {
  gitCheckoutMainAndSync,
  gitCheckoutMasterAndSync
};

function gitCheckoutMainAndSync() {
  gitCheckoutBranchAndFetchAndPrune(getMainBranchName());
}

function gitCheckoutMasterAndSync() {
  gitCheckoutBranchAndFetchAndPrune(MASTER_BRANCH_NAME);
}

function gitCheckoutBranchAndFetchAndPrune(branch) {
  let stdout = cmd(`git checkout ${branch}`, false, -1);
  if (stdout === -1) throw new Error(`Cannot checkout branch "${branch}" to update.`);
  fetchAndPrune();
  console.log(cmd(`git pull origin ${branch}`));
}