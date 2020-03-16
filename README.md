# NestJS Modules

<a href="https://www.npmjs.com/package/nestjs-modules"><img src="https://img.shields.io/npm/v/nestjs-modules.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/nestjs-modules"><img src="https://img.shields.io/npm/l/nestjs-modules.svg" alt="Package License" /></a>

## Table of Contents

- [Description](#description)
- [List of modules](#list-of-modules)
- [Installation](#installation)
- [Examples](#examples)
- [License](#license)

## Description

Interactive command-line utility for installing, removing and updating NestJS modules

## List of modules

- Objection module for NestJS - [nestjs-objection](https://github.com/svtslv/nestjs-objection)
- Knex module for NestJS - [nestjs-knex](https://github.com/svtslv/nestjs-knex)
- Webdav module for NestJS - [nestjs-webdav](https://github.com/svtslv/nestjs-webdav)
- AWS S3 module for NestJS - [nestjs-s3](https://github.com/svtslv/nestjs-s3)
- Maxmind module for NestJS - [nestjs-maxmind](https://github.com/svtslv/nestjs-maxmind)
- GeoIP2 module for NestJS - [nestjs-geoip2](https://github.com/svtslv/nestjs-geoip2)
- Redis module for NestJS - [nestjs-ioredis](https://github.com/svtslv/nestjs-ioredis)
- Minio module for NestJS - [nestjs-minio](https://github.com/svtslv/nestjs-minio)
- Mailer module for NestJS - [nestjs-mailer](https://github.com/svtslv/nestjs-mailer)

## Installation

#### Globally via `npm`

```bash
npm install --global nestjs-modules
```

#### Running on-demand:

```bash
npx nestjs-modules [options]
```

## Examples

### Run without options for interactive

```bash
npx nestjs-modules
```

### Run with --help to print help

```bash
npx nestjs-modules --help
```

```bash
    'usage: nestjs-modules [options]',
    'Run without options for interactive',
    '',
    'options:',
    '  --install    List of modules to install (comma separated values)',
    '  --update     List of modules to update (comma separated values)',
    '  --update     List of modules to remove (comma separated values)',
    '  --list       Print list of all modules and exit',
    '  --help       Print this list and exit',
    '  --version    Print the version and exit.',
    '',
```

## License

MIT
