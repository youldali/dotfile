import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';

export const ENTITIES = [Transaction];

@Module({
  imports: [TypeOrmModule.forFeature(ENTITIES)],
})
export class EntitiesModule {}
