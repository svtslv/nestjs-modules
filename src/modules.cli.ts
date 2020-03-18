#!/usr/bin/env node

import * as chalk from 'chalk';
import * as figlet from 'figlet';
import { argv } from 'optimist';
import * as prompts from 'prompts';
import { MODULES } from './modules.constants';
import { npmSpawnSync, getPackages, printResult, addModule, removeModule } from './modules.utils';

console.log(chalk.green(figlet.textSync('NestJS-Modules')));
console.log(chalk.green(`Homepage: ${ require('../package.json').homepage }`));
console.log(chalk.green(`Run with --help to print help\n`));

if (argv.help) {
  console.log([
    'usage: nestjs-modules [options]',
    'Run without options for interactive',
    '',
    'options:',
    '  --install    List of modules to install (comma separated values)',
    '  --update     List of modules to update (comma separated values)',
    '  --remove     List of modules to remove (comma separated values)',
    '  --list       Print list of all modules and exit',
    '  --help       Print this list and exit',
    '  --version    Print the version and exit.',
    '',
  ].join('\n'));
  process.exit();
}

if (argv.version) {
  console.log('Version: ' + require('../package.json').version, '\n');
  process.exit();
}

if (argv.list) {
  console.log('List of modules:');
  Object.keys(MODULES).forEach(item => console.log(item));
  process.exit();
}

if (argv.install) {
  argv.install = argv.install.split(',');
  const packages = getPackages(argv.install);
  npmSpawnSync('install', packages);
  printResult(packages);
  process.exit();
}

if (argv.remove) {
  argv.remove = argv.remove.split(',');
  const packages = getPackages(argv.remove);
  npmSpawnSync('remove', packages);
  printResult(packages);
  process.exit();
}

if (argv.update) {
  argv.update = argv.update.split(',');
  const packages = getPackages(argv.update);
  npmSpawnSync('remove', packages);
  npmSpawnSync('install', packages);
  printResult(packages);
  process.exit();
}

if (argv._[0] === 'add') {
  addModule(argv._[1]);
  process.exit();
}

if (argv._[0] === 'remove') {
  removeModule(argv._[1]);
  process.exit();
}

const prompt = async() => {
  const choiceAction = [
    { title: 'Install', value: 'install' },
    { title: 'Remove', value: 'remove' },
    { title: 'Update', value: 'update' },
  ];
  const choiceResult = [
    { title: 'Start', value: 'start' },
    { title: 'Print', value: 'print' },
  ];
  const choiceModules = Object.keys(MODULES).map(item => ({ title: item, value: item }));

  const promptAction = await prompts({
    type: 'select',
    name: 'value',
    message: 'Pick Action',
    choices: choiceAction,
    hint: '- Space to select. Return to submit'
  });

  const promptModules = await prompts({
    type: 'multiselect',
    name: 'value',
    message: 'Pick Modules',
    choices: choiceModules,
    hint: '- Space to select. Return to submit'
  });

  const promptResult = await prompts({
    type: 'select',
    name: 'value',
    message: 'Start or Print?',
    choices: choiceResult,
    hint: '- Space to select. Return to submit'
  });

  if(!promptModules.value) {
    console.log('You have not selected any modules. Exit');
    process.exit();
  }

  const packages = getPackages(promptModules.value);

  if(promptResult.value === 'print' || !promptResult.value) {
    console.log(packages);
    process.exit();
  }

  if(promptAction.value === 'install') {
    const packages = getPackages(promptModules.value);
    npmSpawnSync('install', packages);
    printResult(packages);
    process.exit();
  }

  if(promptAction.value === 'remove') {
    const packages = getPackages(promptModules.value);
    npmSpawnSync('remove', packages);
    printResult(packages);
    process.exit();
  }

  if(promptAction.value === 'update') {
    const packages = getPackages(promptModules.value);
    npmSpawnSync('remove', packages);
    npmSpawnSync('install', packages);
    printResult(packages);
    process.exit();
  }
};

prompt();