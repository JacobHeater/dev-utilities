const { cmd } = require('../../../stdio/cmd');

if (require.main === module) {
  gitToggleBranch();
}

module.exports = {
  gitToggleBranch
};

function gitToggleBranch() {
  console.log('Toggling to the previous branch...');
  console.log(cmd('git checkout -'));
}
