import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import AppRoutes from './routes';
import kyInstancce from './api';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <SWRConfig value={{ fetcher: kyInstancce }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer />
    </SWRConfig>
  );
}

export default App;
