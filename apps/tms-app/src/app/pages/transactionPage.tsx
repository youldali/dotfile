import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Drawer,
  VStack,
  SimpleGrid,
  Portal,
  CloseButton,
} from '@chakra-ui/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { TransactionForm, TransactionList } from '../../modules/transactions/components';
import { Transaction } from '../../modules/transactions/domain';

export const TransactionPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      external_id: 'TXN-001',
      date: new Date('2024-06-08T10:30:00'),
      source_account_key: 'ACC-123',
      target_account_key: 'ACC-456',
      amount: 1250.50,
      currency: 'USD',
      metadata: { category: 'transfer', reference: 'INV-001' }
    },
    {
      id: '2',
      external_id: 'TXN-002',
      date: new Date('2024-06-08T14:15:00'),
      source_account_key: 'ACC-789',
      target_account_key: 'ACC-123',
      amount: 750.00,
      currency: 'USD',
      metadata: { category: 'payment', reference: 'PAY-002' }
    },
    {
      id: '3',
      external_id: 'TXN-003',
      date: new Date('2024-06-07T09:45:00'),
      source_account_key: 'ACC-456',
      target_account_key: 'ACC-789',
      amount: 2100.75,
      currency: 'EUR',
      metadata: { category: 'invoice', reference: 'INV-003' }
    }
  ]);

  const handleCreateTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
    const transaction: Transaction = {
      ...newTransaction,
      id: Math.random().toString(36).substr(2, 9),
    };
    setTransactions(prev => [transaction, ...prev]);
  };

  const totalAmount = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const avgTransaction = totalAmount / transactions.length;

  console.log('Index component rendering', { transactions, totalAmount, avgTransaction });

  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="7xl" py={8}>
        <VStack gap={8} align="stretch">
          {/* Header */}
          <Flex justify="space-between" align="center">
            <Box>
              <Heading size="xl" color="gray.800">
                Transaction Management
              </Heading>
              <Text color="gray.600" mt={1}>
                Manage and track all your financial transactions
              </Text>
            </Box>

            <Drawer.Root size="lg" open={isDrawerOpen} onOpenChange={(e) => setIsDrawerOpen(e.open)}>>
              <Drawer.Trigger asChild>
                <Button
                  colorScheme="blue"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <Plus />
                  Create Transaction
                </Button>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content>
                    <Drawer.Header>
                      <Drawer.Title>New Transaction</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                      <TransactionForm onSubmit={handleCreateTransaction} onClose={() => setIsDrawerOpen(false)} />
                    </Drawer.Body>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          </Flex>

          {/* Stats */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <Box bg="white" p={6} borderRadius="lg" shadow="sm">
              <Text fontSize="sm" fontWeight="medium" color="gray.600">Total Transactions</Text>
              <Text fontSize="3xl" fontWeight="bold">{transactions.length}</Text>
              <Text fontSize="sm" color="green.500">Active transactions</Text>
            </Box>
            
            <Box bg="white" p={6} borderRadius="lg" shadow="sm">
              <Text fontSize="sm" fontWeight="medium" color="gray.600">Total Volume</Text>
              <Text fontSize="3xl" fontWeight="bold">${totalAmount.toFixed(2)}</Text>
              <Text fontSize="sm" color="green.500">Combined value</Text>
            </Box>
            
            <Box bg="white" p={6} borderRadius="lg" shadow="sm">
              <Text fontSize="sm" fontWeight="medium" color="gray.600">Average Transaction</Text>
              <Text fontSize="3xl" fontWeight="bold">${avgTransaction.toFixed(2)}</Text>
              <Text fontSize="sm" color="green.500">Per transaction</Text>
            </Box>
          </SimpleGrid>

          {/* Transaction List */}
          <Box>
            <Heading size="lg" mb={4} color="gray.800">
              Recent Transactions
            </Heading>
            <TransactionList transactions={transactions} />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
