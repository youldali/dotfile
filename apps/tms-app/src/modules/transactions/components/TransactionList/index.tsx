import { Box } from '@chakra-ui/react';
import { useFetchTransactionsQuery } from '../../api/fetchTransactions';
import { QuerySuspense } from '../../../../components/QuerySuspense';
import { TransactionListTable } from './TransactionListTable';
import { TransactionListSkeleton } from './TransactionListSkeleton';

export const TransactionList = () => {
  const query = useFetchTransactionsQuery();

  return (
    <QuerySuspense
      queryState={query}
      fallback={(error) => (
        <Box background="tomato" width="100%" padding="4" color="white">
          An error occurred when fetching the list of transactions
        </Box>
      )}
      loading={<TransactionListSkeleton />}
    >
      {(data) => (
        data.length === 0 ? (
          <Box padding="4" bg="gray.500" textAlign='center'>
            No transactions found.
          </Box>
        ) : <TransactionListTable transactions={data} />
      )}
    </QuerySuspense>
  );
};