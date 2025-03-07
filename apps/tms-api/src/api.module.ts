import { Module } from '@nestjs/common';

import { ApiDatabaseModule } from './database/database.module';
import { AppModule } from './app/app.module';

@Module({
  imports: [ApiDatabaseModule, AppModule],
})
export class ApiModule {}
