import { Provider } from "../components/ui/provider";
import { Toaster } from "../components/ui/toaster";
import styled from 'styled-components';
import { TransactionPage } from './pages/transactionPage';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <Provider>
      <StyledApp>
        <TransactionPage />
      </StyledApp>
      <Toaster />
    </Provider>
  );
}

export default App;
