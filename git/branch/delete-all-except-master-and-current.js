const { cmd } = require(`../../io/cmd`);
const { argv } = require(`yargs`);
const { getAllBranches } = require(`./get-all-branches`);

const excludedBranches = [`master`];

if (require.main === module) {
  deleteAllExeptMasterAndCurrentBranch(argv.force);
}

module.exports = {
  deleteAllExeptMasterAndCurrentBranch
};

function deleteAllExeptMasterAndCurrentBranch(force = false) {
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
