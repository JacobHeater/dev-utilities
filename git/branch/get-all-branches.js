const { cmd } = require(`../../io/cmd`);
const { ioToLines } = require(`../helpers`);

module.exports = {
  getAllBranches
};

getAllBranches();

function getAllBranches() {
  let io = cmd(`git branch`, false, '');

  const branches = ioToLines(io)
    .map(b => b.trim())
    .filter(b => !!b);

  return branches;
}
