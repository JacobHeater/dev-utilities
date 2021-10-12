const { cmd } = require('../../../stdio/cmd');

if (require.main === module) {
  if (!argv.branch) {
    console.warn('No branch name was provided. Please ensure you have passed a branch name.');
    process.exit(1);
  }

  checkoutBranch(argv.branch.trim());
}

module.exports = {
  checkoutBranch,
};

/**
 * Checks out the given branch.
 *
 * @param {string} branchName The name of the branch.
 */
function checkoutBranch(branchName) {
  const io = cmd(`git checkout ${branchName}`);
  console.log(io);
}
