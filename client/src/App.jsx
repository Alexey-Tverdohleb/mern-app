import { RouterProvider } from 'react-router-dom';

import ToastProvider from './context/ToastContext';
import LocalStorageProvider from './context/LocalStarageContext/LocalStorageProvider.jsx';
import router from './routing';

const App = () => (
  <LocalStorageProvider>
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  </LocalStorageProvider>
);

export default App;
