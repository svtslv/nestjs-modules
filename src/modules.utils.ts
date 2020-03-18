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
  };

  modules.forEach((item: string) => {
    const dependencies = Object.keys(MODULES[item].dependencies).map(i => `${ i }@${ MODULES[item].dependencies[i] }`);
    const devDependencies = Object.keys(MODULES[item].devDependencies).map(i => `${ i }@${ MODULES[item].devDependencies[i] }`);
    result.homepages = [...result.homepages, MODULES[item].homepage];
    result.dependencies = [...result.dependencies, ...dependencies];
    result.devDependencies = [...result.devDependencies, ...devDependencies];
  });

  return result;
}

export function npmSpawnSync(command: 'install' | 'remove', packages: Packages) {
  if(isNestJSProject()) {
    if (packages.dependencies[0]) {
      spawn.sync('npm', [command, ...packages.dependencies], { stdio: 'inherit' });
    }
    if (packages.devDependencies[0]) {
      spawn.sync('npm', [command, '-D', ...packages.devDependencies], { stdio: 'inherit' });
    }
  }
}

export function printResult(packages: Packages) {
  console.log('\nPackages:');
  [...packages.dependencies, ...packages.devDependencies].forEach(item => console.log('- ' + item));
  console.log('\nHomepages:');
  packages.homepages.forEach(item => console.log('- ' + item));
  console.log('');
}


export function addModule(packageName: string) {
  npmSpawnSync('install', { dependencies: [packageName], devDependencies: [] } );

  let packageJson = null;

  try {
    packageJson = require(join(process.cwd(), 'node_modules', packageName, 'package.json'));
  } catch {
    console.log('File package.json not found');
    return;
  }

  const result: Packages = {
    homepages: [],
    dependencies: [],
    devDependencies: [],
  };

  if(packageJson.nestjsModules) {
    const config = packageJson.nestjsModules;
    if(config.dependencies) {
      result.dependencies = Object.keys(config.dependencies).map(i => `${ i }@${ config.dependencies[i] }`);
    }
    if(config.devDependencies) {
      result.devDependencies = Object.keys(config.devDependencies).map(i => `${ i }@${ config.devDependencies[i] }`);
    }
    if(config.homepage) {
      result.homepages = [config.homepage];
    }
  } else {
    const config = packageJson;
    if(config.peerDependencies) {
      result.dependencies = Object.keys(config.peerDependencies);
    }
    if(config.peerDevDependencies) {
      result.devDependencies = Object.keys(config.peerDevDependencies);
    }
    if(config.homepage) {
      result.homepages = [config.homepage];
    }
  }

  npmSpawnSync('install', result);
  printResult(result);
}

export function removeModule(packageName: string) {
  let packageJson = null;

  try {
    packageJson = require(join(process.cwd(), 'node_modules', packageName, 'package.json'));
  } catch {
    console.log('File package.json not found');
    return;
  }

  const result = {
    homepages: [],
    dependencies: [],
    devDependencies: [],
  };

  if(packageJson.nestjsModules) {
    const config = packageJson.nestjsModules;
    if(config.dependencies) {
      result.dependencies = Object.keys(config.dependencies).map(i => `${ i }@${ config.dependencies[i] }`);
    }
    if(config.devDependencies) {
      result.devDependencies = Object.keys(config.devDependencies).map(i => `${ i }@${ config.devDependencies[i] }`);
    }
    if(config.homepage) {
      result.homepages = [config.homepage];
    }
    npmSpawnSync('remove', result);
    printResult(result);
  }
}