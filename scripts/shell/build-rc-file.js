const { argv } = require('yargs');
const { homedir } = require('os');
const path = require('path');
const fs = require('fs-extra');

const shell = argv.shell;
let rcfile;

switch (shell) {
  case 'bash':
    rcfile = '.bashrc';
    break;
  case 'zsh':
  default:
    rcfile = '.zshrc';
    break;
}

const appRoot = path.resolve(path.join(__dirname, '../../'));
const shellRc = fs.readFileSync(path.join(appRoot, '.shellrc')).toString();
const rcContents = fs.readFileSync(path.join(homedir(), rcfile)).toString();
const newContents = [
  `# Compiled from your ${rcfile} file at ${path.join(homedir(), rcfile)}`,
  rcContents,
  shellRc.replace('<your path here>', path.resolve(path.join(__dirname, '../../')))
].join('\n\n');

fs.ensureDirSync(path.join(appRoot, 'bin', 'shell'));
fs.writeFileSync(path.join(appRoot, 'bin', 'shell', '.shellrc'), newContents);
