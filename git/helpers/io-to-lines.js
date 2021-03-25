const { EOL } = require('os');

module.exports = {
  ioToLines
};

function ioToLines(io) {
  if (!io) {
    throw new Error(`Argument 'io' must be a string with a value.`);
  }

  return io.split(EOL);
}
