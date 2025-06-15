import { Provider } from "../components/ui/provider";
import { Toaster } from "../components/ui/toaster";
import styled from 'styled-components';
import { TransactionPage } from './pages/transactionPage';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const StyledApp = styled.div`
  // Your style here
`;
const queryClient = new QueryClient()

export function App() {
  return (
    <Provider>
      <StyledApp>
        <QueryClientProvider client={queryClient}>
          <TransactionPage />
        </QueryClientProvider>
      </StyledApp>
      <Toaster />
    </Provider>
  );
}

export default App;
