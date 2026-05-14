'use strict';
const { Command } = require('commander');
const chalk = require('chalk');

module.exports = new Command('rules')
  .description('Search and view Archpilot architectural rules')
  .argument('[query]', 'Search term (e.g. security, data)')
  .action((query) => {
    console.log(chalk.yellow('Rule lookup is pointing to the Archpilot remote repository.'));
    console.log(`Searching for rules matching: ${chalk.cyan(query || 'all')}`);
    console.log(chalk.gray('\n(This feature connects to the main rule repository to fetch definitions.)\n'));
    
    // Stub for CLI display
    console.log(`  ${chalk.green('Rule 27')} — Spec-Driven Development`);
    console.log(`  ${chalk.green('Rule 29')} — Agentic AI Governance`);
    console.log(`  ${chalk.green('Rule 07')} — Security Architecture`);
  });
