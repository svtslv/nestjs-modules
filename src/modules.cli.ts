#!/usr/bin/env node

import * as chalk from 'chalk';
import * as figlet from 'figlet';
import * as minimist from 'minimist';
import * as prompts from 'prompts';
import { MODULES } from './modules.constants';
import { npmSpawnSync, getPackages, printResult, addModule, removeModule } from './modules.utils';

const argv = minimist(process.argv.slice(2));
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
  const modules = Object.keys(MODULES).map(item => MODULES[item].homepage);
  console.log(modules.join('\n'), '\n');
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
  const promptModules = await prompts({
    type: 'multiselect',
    name: 'value',
    message: 'List of modules',
    choices: Object.keys(MODULES).map(item => ({ title: item, value: item })),
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    instructions: false,
    min: 1,
    hint: '- Space to select. Return to submit.'
  });

  const promptAction = await prompts({
    type: 'select',
    name: 'value',
    message: 'Choose the action',
    choices: [
      { title: 'install', value: 'install' },
      { title: 'remove', value: 'remove' },
      { title: 'update', value: 'update' },
      { title: 'cancel', value: 'cancel' },
    ],
    hint: '- Space to select. Return to submit.'
  });

  if(!promptModules.value || !promptModules.value[0]) {
    console.log('You have not selected any modules. Exit');
    process.exit();
  }

  const packages = getPackages(promptModules.value);

  if(promptAction.value === 'cancel' || !promptAction.value) {
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