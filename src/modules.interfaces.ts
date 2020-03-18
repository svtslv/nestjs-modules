import { MODULES } from './modules.constants';

export type Modules = Array<keyof typeof MODULES>;

export type Packages = {
  dependencies: string[],
  devDependencies?: string[],
  homepages?: string[],
}