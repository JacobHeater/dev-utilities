const { cmd } = require(`../../io/cmd`);
const { argv } = require(`yargs`);
const { getAllBranches } = require(`./get-all-branches`);
const { getMainBranchName } = require('./get-main-branch-name');

const excludedBranches = [getMainBranchName()];

if (require.main === module) {
  deleteAllExeptMainAndCurrentBranch(argv.force);
}

module.exports = {
  deleteAllExeptMainAndCurrentBranch
};

function deleteAllExeptMainAndCurrentBranch(force = false) {
  console.log(`Enumerating branches for cleanup...`);

  const branches = getAllBranches()
    .filter(b => !!b && !excludedBranches.includes(b) && !b.startsWith(`*`));

  if (!branches.length) {
    console.log(`No branches found to delete. Exiting.`);
    return;
  }

  console.log(`Branches found during enumeration:`);
  console.log(branches);

  const flag = force ? `-D` : `-d`;

  for (const branch of branches) {
    const io = cmd(`git branch ${flag} ${branch}`, false, `Error while deleting branch ${branch}`);
    console.log(io);
  }

  console.log(`Done!`);
}
