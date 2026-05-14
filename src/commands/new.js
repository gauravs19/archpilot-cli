'use strict';
const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { TYPES, getTemplate, hydrate } = require('../templates');

module.exports = new Command('new')
  .description('Scaffold a new architecture document')
  .argument('[type]', 'Type of document to scaffold (spec, design, tasks, lld, adr, etc)')
  .option('-n, --name <string>', 'Name of the feature or component')
  .action(async (type, options) => {
    let docType = type;
    
    if (!docType || !TYPES[docType]) {
      const answers = await inquirer.prompt([{
        type: 'list',
        name: 'type',
        message: 'What type of document do you want to create?',
        choices: Object.keys(TYPES).map(k => ({
          name: `${TYPES[k].section} - ${TYPES[k].label}`,
          value: k
        }))
      }]);
      docType = answers.type;
    }

    let docName = options.name;
    if (!docName) {
      const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter the feature/component name:',
        validate: input => input.trim() !== '' ? true : 'Name is required'
      }]);
      docName = answers.name;
    }

    const tpl = getTemplate(docType);
    if (!tpl) {
      console.error(chalk.red(`Template for ${docType} not found.`));
      process.exit(1);
    }

    const vars = {
      name: docName,
      id: Math.floor(100 + Math.random() * 900),
      author: process.env.USER || 'Architect',
      date: new Date().toISOString().split('T')[0]
    };

    const outContent = hydrate(tpl, vars);
    const fileName = `${docName.toLowerCase().replace(/\s+/g, '-')}-${docType}.md`;
    const outDir = path.join(process.cwd(), '.specs');
    
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    
    const outPath = path.join(outDir, fileName);
    fs.writeFileSync(outPath, outContent);

    console.log(chalk.green('?') + ` Created ${chalk.cyan(fileName)} in ${chalk.gray('.specs/')}`);
  });
