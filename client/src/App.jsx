import { RouterProvider } from 'react-router-dom';

import ToastProvider from './context/ToastContext';
import AuthProvider from './context/AuthContext';
import router from './routing';

const App = () => (
  <AuthProvider>
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  </AuthProvider>
);

export default App;
