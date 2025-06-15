import { type ReactElement } from 'react';
import { type UseQueryResult } from '@tanstack/react-query';

type QuerySuspenseProps<TResult, TError> = {
  queryState: UseQueryResult<TResult, TError>;
  fallback: (error: TError) => ReactElement | null;
  loading: ReactElement | null;
  children: (data: TResult) => ReactElement | null;
};

export const QuerySuspense = <TResult, TError>({
  queryState,
  fallback,
  loading,
  children,
}: QuerySuspenseProps<TResult, TError>) => {
  if (queryState.status === 'pending') {
    return loading;
  }

  if (queryState.status === 'error') {
    return fallback(queryState.error);
  }

  return children(queryState.data);
};
