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
import { currencies } from '../../../common/currencies';
import { useForm } from './useForm';
interface TransactionFormProps {
  onClose: () => void;
}

export const TransactionForm = ({ onClose }: TransactionFormProps) => {
  const { formikProps: { values, errors, setFieldValue, handleSubmit } } = useForm({onClose});
  
  return (
    <Box p={6}>
      <form onSubmit={handleSubmit}>
        <VStack gap={4} align="stretch">
          <Field.Root required>
            <Field.Label>External ID</Field.Label>
            <Input
              value={values.externalId}
              onChange={(e) => setFieldValue('externalId', e.target.value)}
              placeholder="Enter external transaction ID"
            />
            {errors.externalId && <Field.ErrorText>Field required</Field.ErrorText>}
          </Field.Root>

          <Field.Root required>
            <Field.Label>Source Account</Field.Label>
            <Input
              value={values.sourceAccount}
              onChange={(e) => setFieldValue('sourceAccount', e.target.value)}
              placeholder="Enter source account key"
            />
            {errors.sourceAccount && <Field.ErrorText>Field required</Field.ErrorText>}
          </Field.Root>

          <Field.Root required>
            <Field.Label>Target Account</Field.Label>
            <Input
              value={values.targetAccount}
              onChange={(e) => setFieldValue('targetAccount', e.target.value)}
              placeholder="Enter target account key"
            />
            {errors.targetAccount && <Field.ErrorText>Field required</Field.ErrorText>}
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
