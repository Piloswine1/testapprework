import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import AppRoutes from './routes';

function App() {
  return (
    <SWRConfig>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SWRConfig>
  );
}

export default App;
