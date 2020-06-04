const { cmd } = require(`../../io/cmd`);
const { getCurrentBranch } = require(`../branch/get-current-branch`);

if (require.main === module) {
  gitPushOriginCurrentBranch();
}

module.exports = {
  gitPushOriginCurrentBranch
};

function gitPushOriginCurrentBranch() {
  const currentBranch = getCurrentBranch();

  if (currentBranch) {
    const { clean } = currentBranch;
    const io = cmd(`git push origin ${clean}`);
    console.log(io);
  }
}
