import { MODULES } from './modules.constants';

export type Modules = Array<keyof typeof MODULES>;

export type Packages = {
  homepages: string[],
  dependencies: string[],
  devDependencies: string[],
  installDependencies: string,
  installDevDependencies: string,
  removeDependencies: string,
  removeDevDependencies: string,
  updateDependencies: string,
  updateDevDependencies: string,
}