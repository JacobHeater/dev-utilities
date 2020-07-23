const { cmd } = require('../../io/cmd');

module.exports = {
  fetchAndPrune
};

function fetchAndPrune() {
  console.log(
    cmd(`git fetch -p`)
  );
}