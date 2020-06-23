const { cmd } = require('../../io/cmd');

if (require.main === module) {
  gitCheckoutMasterAndSync();
}

module.exports = {
  gitCheckoutMasterAndSync
};

function gitCheckoutMasterAndSync() {
  console.log(
    cmd('git checkout master'),
    cmd('git fetch -p'),
    cmd('git pull origin master'),
  );
}
