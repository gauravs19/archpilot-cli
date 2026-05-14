'use strict';
const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const ora = require('ora');

module.exports = new Command('init')
  .description('Initialize Archpilot in the current project')
  .action(async () => {
    const spinner = ora('Initializing Archpilot...').start();
    const configPath = path.join(process.cwd(), '.archpilot');
    const specsPath = path.join(process.cwd(), '.specs');
    
    setTimeout(() => {
      if (!fs.existsSync(configPath)) {
        fs.mkdirSync(configPath, { recursive: true });
        fs.writeFileSync(
          path.join(configPath, 'config.json'), 
          JSON.stringify({ version: '1.0', format: 'ears', strict: true }, null, 2)
        );
      }
      
      if (!fs.existsSync(specsPath)) {
        fs.mkdirSync(specsPath, { recursive: true });
      }

      spinner.succeed(chalk.green('Archpilot initialized successfully.'));
      console.log(chalk.cyan('\nCreated:'));
      console.log('  📂 .archpilot/config.json');
      console.log('  📂 .specs/');
      console.log(chalk.gray('\nRun ') + chalk.white('archpilot new spec') + chalk.gray(' to create your first requirement spec.'));
    }, 800);
  });
