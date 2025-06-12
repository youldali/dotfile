import { type TransactionDraft } from '../domain/transaction';

export async function createTransactionQuery(draft: TransactionDraft): Promise<void> {
  const response = await fetch(
    `dotfile-tms.local/transactions`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(draft),
    },
  );

  if (!response.ok) {
    throw new Error();
  }
}