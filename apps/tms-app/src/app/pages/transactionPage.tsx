import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Drawer,
  VStack,
  Portal,
  CloseButton,
} from '@chakra-ui/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { TransactionForm, TransactionList } from '../../modules/transactions/components';

export const TransactionPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

            <Drawer.Root size="lg" open={isDrawerOpen} onOpenChange={(e) => setIsDrawerOpen(e.open)}>
              <Drawer.Trigger asChild>
                <Button
                  onClick={() => setIsDrawerOpen(true)}
                  variant="subtle"
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
                      <TransactionForm onClose={() => setIsDrawerOpen(false)} />
                    </Drawer.Body>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          </Flex>
          <Box>
            <Heading size="lg" mb={4} color="gray.800">
              Recent Transactions
            </Heading>
            <TransactionList />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
