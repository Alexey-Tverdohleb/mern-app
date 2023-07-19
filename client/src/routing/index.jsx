import { createBrowserRouter } from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from '../pages/Home/index.jsx';
import Registration from '../pages/Registration/index.jsx';
import Login from '../pages/Login/index.jsx';
import Activation from '../pages/Activation/index.jsx';
import NotFound from '../pages/NotFound/index.jsx';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'registration',
        element: <Registration />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'activation',
        element: <Activation />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
