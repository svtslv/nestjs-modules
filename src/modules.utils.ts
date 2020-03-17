import { join } from 'path';
import * as spawn from 'cross-spawn';
import { Modules, Packages } from './modules.interfaces';
import { MODULES } from './modules.constants';

export function isNestJSProject() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const packageJSON = require(join(process.cwd(), 'package.json'));
    const isNestJS = Boolean(packageJSON?.dependencies['@nestjs/core']);
    if(!isNestJS) {
      console.log('This is not a NestJS project.');
    }
    return isNestJS;
  } catch {
    console.log('File package.json not found.');
    return false;
  }
}

export function getPackages(modules: Modules) {
  const result = {
    dev: [],
    prod: [],
    installDevDependencies: '',
    installProdDependencies: '',
    removeDevDependencies: '',
    removeProdDependencies: '',
    updateDevDependencies: '',
    updateProdDependencies: '',
  };

  modules.forEach((item: string) => {
    result.prod = [...result.prod, ...MODULES[item].prod];
    result.dev = [...result.dev, ...MODULES[item].dev];
  });

  result.installDevDependencies = result.dev[0] ? 'npm install -D ' + result.dev.join(' ') : '';
  result.installProdDependencies = result.prod[0] ? 'npm install ' + result.prod. join(' ') : '';
  result.removeDevDependencies = result.dev[0] ? 'npm remove ' + result.dev.join(' ') : '';
  result.removeProdDependencies = result.prod[0] ? 'npm remove ' + result.prod. join(' ') : '';
  result.updateDevDependencies = result.removeDevDependencies + (result.installDevDependencies ? ' && ' + result.installDevDependencies : '');
  result.updateProdDependencies = result.removeProdDependencies + (result.installProdDependencies ? ' && ' + result.installProdDependencies: '');
  return result;
}

export function install(packages: Packages) {
  if(!isNestJSProject()) {
    return;
  }
  if (packages.prod[0]) {
    spawn.sync('npm', ['install', ...packages.prod], { stdio: 'inherit' });
  }
  if (packages.dev[0]) {
    spawn.sync('npm', ['install', '-D', ...packages.dev], { stdio: 'inherit' });
  }
}

export function remove(packages: Packages) {
  if(!isNestJSProject()) {
    return;
  }
  if (packages.prod[0]) {
    spawn.sync('npm', ['remove', ...packages.prod], { stdio: 'inherit' });
  }
  if (packages.dev[0]) {
    spawn.sync('npm', ['remove', ...packages.dev], { stdio: 'inherit' });
  }
}