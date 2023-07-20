import { RouterProvider } from 'react-router-dom';

import ToastProvider from './context/ToastContext';
import router from './routing';

const App = () => (
  <ToastProvider>
    <RouterProvider router={router} />
  </ToastProvider>
);

export default App;
