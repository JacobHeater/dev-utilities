const { cmd } = require('../../stdio/cmd');
const { getCurrentBranch } = require('../branch/get-current-branch');

if (require.main === module) {
  pullCurrentBranch();
}

module.exports = {
  pullCurrentBranch,
};

function pullCurrentBranch() {
  const currentBranch = getCurrentBranch().clean;

  const io = cmd(`git pull origin ${currentBranch}`);
  console.log(io);
}
