import { Provider } from "../components/ui/provider";
import styled from 'styled-components';
import { TransactionPage } from './pages/transactionPage';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <Provider>
      <StyledApp>
        <TransactionPage />
      </StyledApp>
    </Provider>
  );
}

export default App;
