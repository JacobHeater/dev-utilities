const clipboardy = require('clipboardy');

module.exports = {
  writeSync
};

/**
 * Writes the given content to the clipboard synchronously.
 *
 * @param {string} content The content to write to the clipboard.
 */
function writeSync(content) {
  clipboardy.writeSync(content);
}
