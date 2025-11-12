import { StrictMode } from 'react';
import { AppRoutes } from './routing';
import ApiProvider from 'shared/api';
import './styles/rootStyles.css';

function App() {
  return (
    <StrictMode>
      <ApiProvider>
        <AppRoutes />
      </ApiProvider>
    </StrictMode>
  );
}

export default App;
