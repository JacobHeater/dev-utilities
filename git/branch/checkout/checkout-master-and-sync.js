const { cmd } = require('../../../io/cmd');
const { fetchAndPrune } = require('../../fetch/fetch-and-prune');

if (require.main === module) {
  gitCheckoutMasterAndSync();
}

module.exports = {
  gitCheckoutMasterAndSync
};

function gitCheckoutMasterAndSync() {
  console.log(cmd('git checkout master'));
  fetchAndPrune();
  console.log(cmd('git pull origin master'));
}
