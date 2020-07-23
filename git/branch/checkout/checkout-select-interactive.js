const { argv } = require('yargs');
const readline = require('readline-sync');
const { getAllBranches } = require('../get-all-branches');
const { cmd } = require('../../../io/cmd');
const { fetchAndPrune } = require('../../fetch/fetch-and-prune');

if (argv.fetch) {
  fetchAndPrune();
}

const branches = getAllBranches().filter(b => !b.startsWith('*'));
const selected = readline.keyInSelect(branches);

if (selected === -1) {
  console.log('Cancelled. Exiting.');
  process.exit(0);
}

const branchToCheckout = branches[selected];

console.log(`Checking out ${branchToCheckout}`);
console.log(cmd(`git checkout ${branchToCheckout}`));
console.log(`Done.`);
