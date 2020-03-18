export const MODULES = {
  'nestjs-objection': {
    homepage: 'https://github.com/svtslv/nestjs-objection',
    dependencies: ['nestjs-objection', 'knex', 'objection'],
    devDependencies: [],
  },
  'nestjs-knex': {
    homepage: 'https://github.com/svtslv/nestjs-knex',
    dependencies: ['nestjs-knex', 'knex'],
    devDependencies: [],
  },
  'nestjs-webdav': {
    homepage: 'https://github.com/svtslv/nestjs-webdav',
    dependencies: ['nestjs-webdav', 'webdav'],
    devDependencies: [],
  },
  'nestjs-s3': {
    homepage: 'https://github.com/svtslv/nestjs-s3',
    dependencies: ['nestjs-s3', 'aws-sdk'],
    devDependencies: [],
  },
  'nestjs-maxmind': {
    homepage: 'https://github.com/svtslv/nestjs-maxmind',
    dependencies: ['nestjs-maxmind', 'maxmind'],
    devDependencies: [],
  },
  'nestjs-geoip2': {
    homepage: 'https://github.com/svtslv/nestjs-geoip2',
    dependencies: ['nestjs-geoip2', '@maxmind/geoip2-node'],
    devDependencies: [],
  },
  'nestjs-ioredis': {
    homepage: 'https://github.com/svtslv/nestjs-ioredis',
    dependencies: ['@svtslv/nestjs-ioredis', 'ioredis'],
    devDependencies: ['@types/ioredis'],
  },
  'nestjs-minio': {
    homepage: 'https://github.com/svtslv/nestjs-minio',
    dependencies: ['@svtslv/minio', 'minio'],
    devDependencies: ['@types/minio'],
  },
  'nestjs-mailer': {
    homepage: 'https://github.com/svtslv/nestjs-mailer',
    dependencies: ['nestjs-mailer', 'nodemailer', 'handlebars'],
    devDependencies: ['@types/nodemailer'],
  },
} as const;