import {
  Box,
  Button,
  Input,
  VStack,
  Separator,
  Field,
  NativeSelectRoot,
  NativeSelectField,
  NumberInput,
  Flex,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import { type Transaction } from '../../domain/transaction';
import { currencies, currencyCollection } from '../../../common/currencies';
import { useForm } from './useForm';
interface TransactionFormProps {
  onSubmit: (transaction: Omit<Transaction, 'id'>) => void;
  onClose: () => void;
}

export const TransactionForm = ({ onSubmit, onClose }: TransactionFormProps) => {
  const { formikProps: { values, errors, setFieldValue, handleSubmit } } = useForm();
  console.log(values, errors);
  return (
    <Box p={6}>
      <form onSubmit={handleSubmit}>
        <VStack gap={4} align="stretch">
          <Field.Root required>
            <Field.Label>External ID</Field.Label>
            <Input
              value={values.external_id}
              onChange={(e) => setFieldValue('external_id', e.target.value)}
              placeholder="Enter external transaction ID"
            />
            {errors.external_id && <Field.ErrorText>Field required</Field.ErrorText>}
          </Field.Root>

          <Field.Root required>
            <Field.Label>Source Account</Field.Label>
            <Input
              value={values.source_account_key}
              onChange={(e) => setFieldValue('source_account_key', e.target.value)}
              placeholder="Enter source account key"
            />
            {errors.source_account_key && <Field.ErrorText>Field required</Field.ErrorText>}
          </Field.Root>

          <Field.Root required>
            <Field.Label>Target Account</Field.Label>
            <Input
              value={values.target_account_key}
              onChange={(e) => setFieldValue('target_account_key', e.target.value)}
              placeholder="Enter target account key"
            />
            {errors.target_account_key && <Field.ErrorText>Field required</Field.ErrorText>}
          </Field.Root>

          <Field.Root required width={'100%'} invalid={Boolean(errors.date)}>
            <Field.Label>Transaction Date</Field.Label>
              <DatePicker
                
                selected={values.date}
                onChange={(date) => setFieldValue('date', date)}
                timeInputLabel="Time:"
                dateFormat="dd/MM/yyyy h:mm aa"
                showTimeInput
                customInput={<Input width='100%' />}
              />
            {errors.date && <Field.ErrorText>Field required</Field.ErrorText>}
          </Field.Root>

          <Field.Root required invalid={Boolean(errors.amount)}>
            <Field.Label>Enter Amount</Field.Label>
            <NumberInput.Root width='100%' min={0} onValueChange={(value) => setFieldValue('amount', value.valueAsNumber)} value={values.amount ? values.amount.toString() : ''}>
              <NumberInput.Control />
              <NumberInput.Input />
            </NumberInput.Root>
            {errors.amount && <Field.ErrorText>Invalid amount</Field.ErrorText>}
          </Field.Root>

          <Field.Root required invalid={Boolean(errors.currency)}>
            <Field.Label>Currency</Field.Label>
            <NativeSelectRoot>
              <NativeSelectField
                value={values.currency}
                onChange={(e) => setFieldValue('currency', e.target.value)}
                placeholder="Select currency"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </NativeSelectField>
            </NativeSelectRoot>
            {errors.currency && <Field.ErrorText>Field required</Field.ErrorText>}
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
