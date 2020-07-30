const { writeSync } = require('../../clipboard');
const { getCurrentBranch } = require('./get-current-branch');

const { clean } = getCurrentBranch();

console.log(`Writing ${clean} to the clipboard.`);

writeSync(clean);

console.log(`Done writing ${clean} to the clipboard.`);
