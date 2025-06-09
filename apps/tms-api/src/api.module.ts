import { Module } from '@nestjs/common';

import { ApiDatabaseModule } from './database/database.module';
import { AppModule } from './app/app.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [ApiDatabaseModule, AppModule, TransactionsModule],
})
export class ApiModule {}
