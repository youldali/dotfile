export const databaseConfig = () =>
  ({
    databaseConfig: {
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT ?? '', 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      logging: process.env.DATABASE_LOGGING === 'true',
      timezone: 'Z',
    },
  }) as const;
