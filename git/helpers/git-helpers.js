module.exports = {
  getCommitFromCommitLog
};

function getCommitFromCommitLog(logMessage) {
  return (logMessage || '').split(' ')[1];
}