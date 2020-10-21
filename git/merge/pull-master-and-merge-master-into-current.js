const { cmd } = require('../../io/cmd');
const { gitCheckoutMasterAndSync } = require('../branch/checkout/checkout-master-and-sync');
const { gitToggleBranch } = require('../branch/checkout/toggle-branch');

if (require.main === module) {
  gitPullMasterAndMergeMasterIntoCurrent();
}

module.exports = {
  gitPullMasterAndMergeMasterIntoCurrent
};

function gitPullMasterAndMergeMasterIntoCurrent() {
  gitCheckoutMasterAndSync();
  gitToggleBranch();
  console.log(cmd('git merge master'));
}
