import { baseApiUrl } from '../../../../config';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { type Transaction } from '../domain/transaction';

const queryKey = ['transactions'];

export async function fetchTransactionsQuery(): Promise<Transaction[]> {
  const response = await fetch(
    `${baseApiUrl}/transactions`,
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

export const useFetchTransactionsQuery = () => {
  return useQuery({ queryKey, queryFn: fetchTransactionsQuery });
};

export const useInvalidateTransactionsQuery = () => {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({ queryKey });
  };
}
