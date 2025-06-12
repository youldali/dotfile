import { useQuery } from '@tanstack/react-query';
import { type Transaction } from '../domain/transaction';

export async function fetchTransactions(): Promise<Transaction[]> {
  const response = await fetch(
    `dotfile-tms.local/transactions`,
    {
      method: 'GET',
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
}

export const useFetchTransactions = () => {
  return useQuery({ queryKey: ['transactions'], queryFn: fetchTransactions });
};
