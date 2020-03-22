export const MODULES = {
  'nestjs-objection': {
    homepage: 'https://github.com/svtslv/nestjs-objection',
    dependencies: { 'nestjs-objection': null, 'knex': null, 'objection': null },
    devDependencies: {},
  },
  'nestjs-knex': {
    homepage: 'https://github.com/svtslv/nestjs-knex',
    dependencies: { 'nestjs-knex': null, 'knex': null },
    devDependencies: {},
  },
  'nestjs-webdav': {
    homepage: 'https://github.com/svtslv/nestjs-webdav',
    dependencies: { 'nestjs-webdav': null, 'webdav': null },
    devDependencies: {},
  },
  'nestjs-s3': {
    homepage: 'https://github.com/svtslv/nestjs-s3',
    dependencies: { 'nestjs-s3': null, 'aws-sdk': null },
    devDependencies: {},
  },
  'nestjs-maxmind': {
    homepage: 'https://github.com/svtslv/nestjs-maxmind',
    dependencies: { 'nestjs-maxmind': null, 'maxmind': null },
    devDependencies: {},
  },
  'nestjs-geoip2': {
    homepage: 'https://github.com/svtslv/nestjs-geoip2',
    dependencies: { 'nestjs-geoip2': null, '@maxmind/geoip2-node': null },
    devDependencies: {},
  },
  'nestjs-mailer': {
    homepage: 'https://github.com/svtslv/nestjs-mailer',
    dependencies: { 'nestjs-mailer': null, 'nodemailer': null, 'handlebars': null },
    devDependencies: { '@types/nodemailer': null },
  },
  '@svtslv/nestjs-ioredis': {
    homepage: 'https://github.com/svtslv/nestjs-ioredis',
    dependencies: { '@svtslv/nestjs-ioredis': null, 'ioredis': null },
    devDependencies: { '@types/ioredis': null },
  },
  '@svtslv/minio': {
    homepage: 'https://github.com/svtslv/nestjs-minio',
    dependencies: { '@svtslv/minio': null, 'minio': null },
    devDependencies: { '@types/minio': null },
  },
  '@nestjs/bull': {
    homepage: 'https://github.com/nestjs/bull',
    dependencies: { '@nestjs/bull': null, 'bull': null },
    devDependencies: { '@types/bull': null },
  },
  '@nestjs/terminus': {
    homepage: 'https://github.com/nestjs/terminus',
    dependencies: { '@nestjs/terminus': null, '@godaddy/terminus': null },
    devDependencies: {},
  },
  '@nestjs/graphql': {
    homepage: 'https://github.com/nestjs/graphql',
    dependencies: { '@nestjs/graphql': null, 'apollo-server-express': null, 'graphql': null },
    devDependencies: {},
  },
  '@nestjs/elasticsearch': {
    homepage: 'https://github.com/nestjs/elasticsearch',
    dependencies: { '@nestjs/elasticsearch': null, '@elastic/elasticsearch': null },
    devDependencies: {},
  },
  '@nestjs/mongoose': {
    homepage: 'https://github.com/nestjs/mongoose',
    dependencies: { '@nestjs/mongoose': null, 'mongoose': null },
    devDependencies: {},
  },
  '@nestjs/schedule': {
    homepage: 'https://github.com/nestjs/schedule',
    dependencies: { '@nestjs/schedule': null },
    devDependencies: {},
  },
  '@nestjs/config': {
    homepage: 'https://github.com/nestjs/config',
    dependencies: { '@nestjs/config': null },
    devDependencies: {},
  },
  '@nestjs/typeorm': {
    homepage: 'https://github.com/nestjs/typeorm',
    dependencies: { '@nestjs/typeorm': null, 'typeorm': null },
    devDependencies: {},
  },
  '@nestjs/sequelize': {
    homepage: 'https://github.com/nestjs/sequelize',
    dependencies: { '@nestjs/sequelize': null, 'sequelize-typescript': null, 'sequelize': null },
    devDependencies: {},
  },
  '@nestjs/passport': {
    homepage: 'https://github.com/nestjs/passport',
    dependencies: { '@nestjs/passport': null, 'passport': null },
    devDependencies: {},
  },
  '@nestjs/cqrs': {
    homepage: 'https://github.com/nestjs/cqrs',
    dependencies: { '@nestjs/cqrs': null },
    devDependencies: {},
  },
  '@nestjs/jwt': {
    homepage: 'https://github.com/nestjs/jwt',
    dependencies: { '@nestjs/jwt': null },
    devDependencies: {},
  },
  '@nestjs/swagger': {
    homepage: 'https://github.com/nestjs/swagger',
    dependencies: { '@nestjs/swagger': null },
    devDependencies: {},
  },
  '@nestjsx/crud': {
    homepage: 'https://github.com/nestjsx/crud',
    dependencies: { '@nestjsx/crud': null, '@nestjsx/crud-request': null, '@nestjsx/crud-typeorm': null },
    devDependencies: {},
  },
  'nest-router': {
    homepage: 'https://github.com/nestjsx/nest-router',
    dependencies: { 'nest-router': null },
    devDependencies: {},
  },
  'nest-access-control': {
    homepage: 'https://github.com/nestjsx/nest-access-control',
    dependencies: { 'nest-access-control': null },
    devDependencies: {},
  },
  'class-validator-callback': {
    homepage: 'https://github.com/svtslv/class-validator-callback',
    dependencies: { 'class-validator': null, 'class-validator-callback': null, 'class-transformer': null },
    devDependencies: {},
  },
} as const;