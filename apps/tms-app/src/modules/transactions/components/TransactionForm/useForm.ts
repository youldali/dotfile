import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { type Errors, type TransactionDraft, validate } from '../../domain';
import { createTransactionQuery } from '../../api/createTransaction';

export const useForm = () => {
  const [validateOnChange, setValidateOnChange] = useState(false);

  const formikProps = useFormik<TransactionDraft>({
    initialValues: {},
    onSubmit: async (values) => {
      try {
        await createTransactionQuery(values);
      } catch {
        // handled by the query state
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
