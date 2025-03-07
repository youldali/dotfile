/* eslint-disable */
// https://github.com/tonivj5/typeorm-naming-strategies/issues/4
// ONLY USE FOR migration CLI which has some issues with TypeScript
// Working for local env for migrations cli
const { DataSource } = require('typeorm');
const { ENTITIES } = require('../../../libs/backend/shared/database/src');
const { migrations } = require('../../../libs/backend/shared/migrations/src');

// Postgres container is exposed as "postgres" host in CI
const host = process.env.DATABASE_HOST || 'localhost';

const ormConfig = {
  type: 'postgres',
  host,
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'main_db',
  entities: ENTITIES,
  // subscribers: ['src/**/*.subscriber.ts'], because we use Nestjs subscribers need the AppModule loaded
  migrations: migrations,
  cli: {
    migrationsDir: '../../../libs/backend/shared/migrations/src/migrations',
  },
};

module.exports = {
  dataSource: new DataSource(ormConfig),
};
