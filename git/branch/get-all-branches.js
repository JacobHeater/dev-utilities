const { cmd } = require(`../../io/cmd`);
const { ioToLines } = require(`../helpers`);

module.exports = {
  getAllBranches
};

function getAllBranches() {
  let io = cmd(`git branch`, false, '');

  const branches = ioToLines(io).map(b => b.trim());

  return branches;
}
