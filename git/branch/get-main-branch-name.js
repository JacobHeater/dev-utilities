module.exports = {
  getMainBranchName
};

if (require.main === module) {
  console.log(`Main branch name is "${getMainBranchName()}."`);
}

function getMainBranchName() {
  return process.env.UTILITIES_GIT_MAIN_BRANCH_NAME || 'main';
}
