import { IsNotEmpty } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  externalId: string;

  date: Date;

  @IsNotEmpty()
  sourceAccount: string;

  @IsNotEmpty()
  targetAccount: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  currency: string;

  metadata?: Record<string, unknown>;
}
