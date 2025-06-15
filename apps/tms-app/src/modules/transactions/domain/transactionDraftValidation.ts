import * as F from 'formik';
import * as yup from 'yup';
import { type TransactionDraft } from '../domain/transaction';

export interface Errors {
  amount?:
    | 'required'
    | 'nonPositiveAmount';
  date?: 'required' | 'dateIntheFuture';
  externalId?: 'required';
  sourceAccount?: 'required';
  targetAccount?: 'required';
  currency?: 'required';
}

export const validate = (
  transactionDraft: TransactionDraft,
): Errors | undefined => {
  try {
    F.validateYupSchema(transactionDraft, validationSchema, true);
    return undefined;
  } catch (e) {
    return {
      ...F.yupToFormErrors<TransactionDraft>(e),
    } as Errors;
  }
};


const amountFieldSchema = yup
  .number()
  .moreThan(0, 'nonPositiveAmount')
  .required('required');

const textFieldSchema = yup
  .string()
  .max(255, 'maxLength')
  .required('required');

const validationSchema = yup.object().shape({
  amount: amountFieldSchema,
  date: yup.date().max(new Date(), 'dateIntheFuture').optional(),
  externalId: textFieldSchema,
  sourceAccount: textFieldSchema,
  targetAccount: textFieldSchema,
  currency: yup.string().required('required'),
});
