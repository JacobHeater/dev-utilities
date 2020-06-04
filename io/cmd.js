const { execSync } = require('child_process');

module.exports = {
  cmd
};

/**
 * Runs a command through the child_process
 * execSync function, and returns the stdout
 * back to the caller.
 *
 * @param {string} command The command to run.
 * @param {boolean} [exitOnError] Exit if the command fails.
 * @param {any} [defaultValue] The default value if errored out.
 */
function cmd(command, exitOnError = true, defaultValue = null) {
  try {
    return execSync(command).toString();
  } catch (e) {
    console.error(e.stdout.toString());

    if (exitOnError) {
      process.exit(1);
    }

    return defaultValue;
  }
}
