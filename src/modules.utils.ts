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
    homepages: [],
    dependencies: [],
    devDependencies: [],
    installDependencies: '',
    installDevDependencies: '',
    removeDependencies: '',
    removeDevDependencies: '',
    updateDependencies: '',
    updateDevDependencies: '',
  };

  modules.forEach((item: string) => {
    result.homepages = [...result.homepages, MODULES[item].homepage];
    result.dependencies = [...result.dependencies, ...MODULES[item].dependencies];
    result.devDependencies = [...result.devDependencies, ...MODULES[item].devDependencies];
  });

  result.installDevDependencies = result.devDependencies[0] ? 'npm install -D ' + result.devDependencies.join(' ') : '';
  result.installDependencies = result.dependencies[0] ? 'npm install ' + result.dependencies. join(' ') : '';
  result.removeDevDependencies = result.devDependencies[0] ? 'npm remove ' + result.devDependencies.join(' ') : '';
  result.removeDependencies = result.dependencies[0] ? 'npm remove ' + result.dependencies. join(' ') : '';
  result.updateDependencies = result.removeDependencies + (result.installDependencies ? ' && ' + result.installDependencies: '');
  result.updateDevDependencies = result.removeDevDependencies + (result.installDevDependencies ? ' && ' + result.installDevDependencies : '');
  return result;
}

export function install(packages: Packages) {
  if(!isNestJSProject()) {
    return;
  }
  if (packages.dependencies[0]) {
    spawn.sync('npm', ['install', ...packages.dependencies], { stdio: 'inherit' });
  }
  if (packages.devDependencies[0]) {
    spawn.sync('npm', ['install', '-D', ...packages.devDependencies], { stdio: 'inherit' });
  }
}

export function remove(packages: Packages) {
  if(!isNestJSProject()) {
    return;
  }
  if (packages.dependencies[0]) {
    spawn.sync('npm', ['remove', ...packages.dependencies], { stdio: 'inherit' });
  }
  if (packages.devDependencies[0]) {
    spawn.sync('npm', ['remove', ...packages.devDependencies], { stdio: 'inherit' });
  }
}