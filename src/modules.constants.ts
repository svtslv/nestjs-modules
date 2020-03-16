export const MODULES = {
  'nestjs-objection': {
    prod: ['nestjs-objection', 'knex', 'objection'],
    dev: [],
  },
  'nestjs-knex': {
    prod: ['nestjs-knex', 'knex'],
    dev: [],
  },
  'nestjs-webdav': {
    prod: ['nestjs-webdav', 'webdav'],
    dev: [],
  },
  'nestjs-s3': {
    prod: ['nestjs-s3', 'aws-sdk'],
    dev: [],
  },
  'nestjs-maxmind': {
    prod: ['nestjs-maxmind', 'maxmind'],
    dev: [],
  },
  'nestjs-geoip2': {
    prod: ['nestjs-geoip2', '@maxmind/geoip2-node'],
    dev: [],
  },
  'nestjs-ioredis': {
    prod: ['@svtslv/nestjs-ioredis', 'ioredis'],
    dev: ['@types/ioredis'],
  },
  'nestjs-minio': {
    prod: ['@svtslv/minio', 'minio'],
    dev: ['@types/minio'],
  },
  'nestjs-mailer': {
    prod: ['nestjs-mailer', 'nodemailer', 'handlebars'],
    dev: ['@types/nodemailer'],
  },
} as const;