import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <SWRConfig value={{}}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer />
    </SWRConfig>
  );
}

export default App;
