type TransactionData = {
  id: string;
  external_id: string;
  date: Date;
  source_account_key: string;
  target_account_key: string;
  amount: number;
  currency: string;
  metadata?: Record<string, any>;
}

export class Transaction {
  transactionData: TransactionData;

  constructor(transactionData: TransactionData) {
    this.transactionData = transactionData;
  }
}
