import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toaster } from "../../../../components/ui/toaster"
import { type Errors, type TransactionDraft, validate } from '../../domain';
import { useCreateTransactionQuery } from '../../api/createTransaction';

type Props = {
  onClose: () => void;
}

export const useForm = ({ onClose }: Props) => {
  const [validateOnChange, setValidateOnChange] = useState(false);
  const createTransactionMutation = useCreateTransactionQuery();
  const formikProps = useFormik<TransactionDraft>({
    initialValues: {},
    onSubmit: async (values) => {
      try {
        await createTransactionMutation.mutateAsync(values);
        toaster.create({
          title: 'Transaction created',
          description: 'Your transaction has been created successfully.',
          type: 'success',
        });
        onClose();
      } catch {
        toaster.create({
          title: 'An error occurred',
          description: 'Failed to create transaction. Please try again later.',
          type: 'error',
        });
      }
    },
    validateOnChange,
    validateOnBlur: false,
    enableReinitialize: true,
    validate,
  });

  useEffect(() => {
    setValidateOnChange(!formikProps.isValid);
  }, [formikProps.isValid]);

  return {
    formikProps: {
      ...formikProps,
      errors: formikProps.errors as Errors,
    },
  };
};
