import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getDatabaseConfig = (databaseUrl: string): MongooseModuleOptions => ({
  uri: databaseUrl,
  retryAttempts: 5,
  retryDelay: 3000,
  socketTimeoutMS: 45000,
});
