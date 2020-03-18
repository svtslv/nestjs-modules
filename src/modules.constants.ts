export const MODULES = {
  'nestjs-objection': {
    homepage: 'https://github.com/svtslv/nestjs-objection',
    dependencies: {
      'nestjs-objection': 'latest', 
      'knex': 'latest', 
      'objection': 'latest',
    },
    devDependencies: {},
  },
  'nestjs-knex': {
    homepage: 'https://github.com/svtslv/nestjs-knex',
    dependencies: {
      'nestjs-knex': 'latest', 
      'knex': 'latest',
    },
    devDependencies: {},
  },
  'nestjs-webdav': {
    homepage: 'https://github.com/svtslv/nestjs-webdav',
    dependencies: {
      'nestjs-webdav': 'latest',
      'webdav': 'latest',
    },
    devDependencies: {},
  },
  'nestjs-s3': {
    homepage: 'https://github.com/svtslv/nestjs-s3',
    dependencies: {
      'nestjs-s3': 'latest', 
      'aws-sdk': 'latest',
    },
    devDependencies: {},
  },
  'nestjs-maxmind': {
    homepage: 'https://github.com/svtslv/nestjs-maxmind',
    dependencies: {
      'nestjs-maxmind': 'latest', 
      'maxmind': 'latest',
    },
    devDependencies: {},
  },
  'nestjs-geoip2': {
    homepage: 'https://github.com/svtslv/nestjs-geoip2',
    dependencies: {
      'nestjs-geoip2': 'latest',
      '@maxmind/geoip2-node': 'latest',
    },
    devDependencies: {},
  },
  'nestjs-ioredis': {
    homepage: 'https://github.com/svtslv/nestjs-ioredis',
    dependencies: {
      '@svtslv/nestjs-ioredis': 'latest', 
      'ioredis': 'latest',
    },
    devDependencies: {
      '@types/ioredis': 'latest',
    },
  },
  'nestjs-minio': {
    homepage: 'https://github.com/svtslv/nestjs-minio',
    dependencies: {
      '@svtslv/minio': 'latest', 
      'minio': 'latest',
    },
    devDependencies: {
      '@types/minio': 'latest',
    },
  },
  'nestjs-mailer': {
    homepage: 'https://github.com/svtslv/nestjs-mailer',
    dependencies: { 
      'nestjs-mailer': 'latest', 
      'nodemailer': 'latest', 
      'handlebars': 'latest',
    },
    devDependencies: {
      '@types/nodemailer': 'latest',
    },
  },
} as const;