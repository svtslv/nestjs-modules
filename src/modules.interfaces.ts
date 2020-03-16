import { MODULES } from './modules.constants';

export type Modules = Array<keyof typeof MODULES>;

export type Packages = {
  dev: string[],
  prod: string[],
  installDevDependencies: string,
  installProdDependencies: string,
  removeDevDependencies: string,
  removeProdDependencies: string,
  updateDevDependencies: string,
  updateProdDependencies: string,
}