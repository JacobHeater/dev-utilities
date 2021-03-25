const { cmd } = require('../../stdio/cmd');
const { searchLinesForFirstMatch, ioToLines, getCommitFromCommitLog } = require('../helpers');

if (require.main === module) {
  console.log(popLastCommit());
}

module.exports = {
  popLastCommit
};

function popLastCommit() {
  const io = cmd(`git log`);
  const lines = ioToLines(io);
  const match = searchLinesForFirstMatch(lines, /commit [\w\d]+/i);

  if (!match) {
    console.warn(`No commits found in the log. Cannot proceed.`);

    return null;
  }

  return getCommitFromCommitLog(match);
}