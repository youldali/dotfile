import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Separator,
  Textarea,
  Field,
  NativeSelectRoot,
  NativeSelectField,
  NumberInput,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { type Transaction } from '../domain/transaction';

interface TransactionFormProps {
  onSubmit: (transaction: Omit<Transaction, 'id'>) => void;
  onClose: () => void;
}

export const TransactionForm = ({ onSubmit, onClose }: TransactionFormProps) => {
  const [formData, setFormData] = useState({
    external_id: '',
    source_account_key: '',
    target_account_key: '',
    amount: 0,
    currency: 'USD',
    metadata: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.external_id || !formData.source_account_key || !formData.target_account_key || formData.amount <= 0) {
      return;
    }

    const transaction: Omit<Transaction, 'id'> = {
      external_id: formData.external_id,
      date: new Date(),
      source_account_key: formData.source_account_key,
      target_account_key: formData.target_account_key,
      amount: formData.amount,
      currency: formData.currency,
      metadata: formData.metadata ? JSON.parse(formData.metadata) : undefined,
    };

    onSubmit(transaction);
    
    // toast.success('Transaction has been successfully created');

    onClose();
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Box p={6}>
      <form onSubmit={handleSubmit}>
        <VStack gap={4} align="stretch">
          <Field.Root required>
            <Field.Label>External ID</Field.Label>
            <Input
              value={formData.external_id}
              onChange={(e) => handleInputChange('external_id', e.target.value)}
              placeholder="Enter external transaction ID"
            />
          </Field.Root>

          <Field.Root required>
            <Field.Label>Source Account</Field.Label>
            <Input
              value={formData.source_account_key}
              onChange={(e) => handleInputChange('source_account_key', e.target.value)}
              placeholder="Enter source account key"
            />
          </Field.Root>

          <Field.Root required>
            <Field.Label>Target Account</Field.Label>
            <Input
              value={formData.target_account_key}
              onChange={(e) => handleInputChange('target_account_key', e.target.value)}
              placeholder="Enter target account key"
            />
          </Field.Root>

          <Field.Root required invalid>
            <Field.Label>Enter Amount</Field.Label>
            <NumberInput.Root width='100%'>
              <NumberInput.Control />
              <NumberInput.Input />
            </NumberInput.Root>
            <Field.ErrorText>The entry is invalid</Field.ErrorText>
          </Field.Root>

          <Field.Root required>
            <Field.Label>Currency</Field.Label>
            <NativeSelectRoot>
              <NativeSelectField
                value={formData.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
              </NativeSelectField>
            </NativeSelectRoot>
          </Field.Root>

          <Field.Root>
            <Field.Label>Metadata (JSON)</Field.Label>
            <Textarea
              value={formData.metadata}
              onChange={(e) => handleInputChange('metadata', e.target.value)}
              placeholder='{"key": "value"}'
              rows={3}
            />
          </Field.Root>

          <Separator />

          <Flex direction="row" gap={3}>
            <Button type="submit" colorScheme="blue" size="lg" flexGrow={1}>
              Create Transaction
            </Button>
            <Button variant="ghost" onClick={onClose} flexGrow={1}>
              Cancel
            </Button>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};
