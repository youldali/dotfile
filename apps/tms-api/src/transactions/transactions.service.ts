import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import { Transaction } from '@dotfile-tms/database'; 
@Injectable()
export class TransactionsService {
   constructor(
    @InjectRepository(Transaction)
    private readonly repository: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    await this.repository.save({ ...createTransactionDto, metadata: createTransactionDto.metadata ?? {} });
  }

  async findAll() {
    const transactions = await this.repository.find();
    return transactions;
  }
}
