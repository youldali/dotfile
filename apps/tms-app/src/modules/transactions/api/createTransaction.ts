import { useMutation } from '@tanstack/react-query';
import { baseApiUrl } from '../../../../config';
import { type TransactionDraft } from '../domain/transaction';
import { useInvalidateTransactionsQuery } from './fetchTransactions';

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

export const useCreateTransactionQuery = () => {
  const invalidateTransactions = useInvalidateTransactionsQuery();

  return useMutation({
    mutationFn: createTransactionQuery,
    onSuccess: () => {
      invalidateTransactions();
    },
  });
}