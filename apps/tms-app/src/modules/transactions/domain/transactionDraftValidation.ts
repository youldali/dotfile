import * as F from 'formik';
import * as yup from 'yup';
import { type TransactionDraft } from '../domain/transaction';

export interface Errors {
  amount?:
    | 'required'
    | 'nonPositiveAmount';
  date?: 'required' | 'dateIntheFuture';
  external_id?: 'required';
  source_account_key?: 'required';
  target_account_key?: 'required';
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
  date: yup.date().max(new Date(), 'dateIntheFuture').required('required'),
  external_id: textFieldSchema,
  source_account_key: textFieldSchema,
  target_account_key: textFieldSchema,
  currency: yup.string().required('required'),
});
