import { baseApiUrl } from '../../../../config';
import { type TransactionDraft } from '../domain/transaction';

export async function createTransactionQuery(draft: TransactionDraft): Promise<void> {
  const response = await fetch(
    `${baseApiUrl}/transactions`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(draft),
      mode: 'cors',
    },
  );

  if (!response.ok) {
    throw new Error();
  }
}