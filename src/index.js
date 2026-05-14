'use strict';

const { Command } = require('commander');
const chalk = require('chalk');
const { version } = require('../package.json');

const program = new Command();

// ── Brand header ─────────────────────────────────────────────────────────────
const BRAND = chalk.bold.blue('🏛  Archpilot') + chalk.gray(' — Enterprise Architecture Standards Library');
const SITE  = chalk.gray('    https://gauravs19.github.io/archpilot/');

console.log('');
console.log(BRAND);
console.log(SITE);
console.log('');

// ── Register commands ─────────────────────────────────────────────────────────
program
  .name('archpilot')
  .description('Scaffold enterprise architecture documents from production-grade templates')
  .version(version, '-v, --version');

program.addCommand(require('./commands/init'));
program.addCommand(require('./commands/new'));
program.addCommand(require('./commands/list'));
program.addCommand(require('./commands/rules'));
program.addCommand(require('./commands/check'));

program.parse(process.argv);

// Show help if no args given
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
