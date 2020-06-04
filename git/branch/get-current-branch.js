const { getAllBranches } = require('./get-all-branches');

module.exports = {
  getCurrentBranch
};

function getCurrentBranch() {
  const branches = getAllBranches();
  const current = branches.find(b => b.startsWith('*'));

  if (current) {
    return {
      raw: current,
      clean: current.substring(1, current.length).trim()
    };
  }

  return current;
}