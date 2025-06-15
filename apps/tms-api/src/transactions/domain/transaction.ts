export interface Transaction {
  id: string;
  externalId: string;
  date?: Date;
  sourceAccount: string;
  targetAccount: string;
  amount: number;
  currency: string;
  metadata?: Record<string, any>;
}

