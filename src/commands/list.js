'use strict';
const { Command } = require('commander');
const chalk = require('chalk');
const { TYPES } = require('../templates');

module.exports = new Command('list')
  .description('List all available document templates')
  .action(() => {
    console.log(chalk.bold('Available Archpilot Templates:\n'));
    
    const bySection = {};
    Object.keys(TYPES).forEach(k => {
      const sec = TYPES[k].section;
      if (!bySection[sec]) bySection[sec] = [];
      bySection[sec].push({ id: k, label: TYPES[k].label });
    });

    for (const [section, items] of Object.entries(bySection)) {
      console.log(chalk.cyan.bold(`  ${section}`));
      items.forEach(item => {
        console.log(`    ${chalk.green(item.id.padEnd(12))} ${chalk.gray('—')} ${item.label}`);
      });
      console.log('');
    }
  });
