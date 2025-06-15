import {
  Table,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { type Transaction } from '../../domain/transaction';
import { formatCurrency } from '../../../common/currencies';
interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionListTable = ({ transactions }: TransactionListProps) => {
  return (
      <Table.Root colorPalette="red" striped interactive>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Transaction ID</Table.ColumnHeader>
            <Table.ColumnHeader>From</Table.ColumnHeader>
            <Table.ColumnHeader>To</Table.ColumnHeader>
            <Table.ColumnHeader>Amount</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {transactions.map((transaction) => (
            <Table.Row key={transaction.id}>
              <Table.Cell>
                <Flex direction="column">
                  <Text fontWeight="medium" fontSize="sm">
                    {transaction.externalId}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {transaction.id.slice(0, 8)}...
                  </Text>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Flex align="center" gap={2}>
                  <ArrowUpRight color="red" size={16} />
                  <Text fontSize="sm">{transaction.sourceAccount}</Text>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Flex align="center" gap={2}>
                  <ArrowDownLeft color="green" size={16} />
                  <Text fontSize="sm">{transaction.targetAccount}</Text>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Text fontWeight="bold" fontSize="sm">
                  {formatCurrency(transaction.amount, transaction.currency)}
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Box 
                  bg="green.100" 
                  color="green.800" 
                  px={2} 
                  py={1} 
                  borderRadius="md" 
                  fontSize="xs" 
                  fontWeight="medium"
                  display="inline-block"
                >
                  Completed
                </Box>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
  );
};
