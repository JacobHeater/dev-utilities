const { cmd } = require('../../stdio/cmd');

module.exports = {
  fetchAndPrune
};

function fetchAndPrune() {
  console.log(
    cmd(`git fetch -p`)
  );
}