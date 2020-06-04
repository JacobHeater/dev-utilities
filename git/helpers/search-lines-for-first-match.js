module.exports = {
  searchLinesForFirstMatch
};

/**
 * Searches the lines for the first match of the
 * given string.
 *
 * @param {string[]} lines The lines to search.
 * @param {string | RegExp} search The text to search for.
 */
function searchLinesForFirstMatch(lines, search) {
  return lines.find(l => l.match(search) != null);
}
