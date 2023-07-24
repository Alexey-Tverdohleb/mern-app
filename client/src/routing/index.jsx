import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './RootLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Management from '../pages/Management';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Auth from '../pages/Auth';
import Activation from '../pages/Auth/Activation.jsx';
import NotFound from '../pages/NotFound';

export default createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <PrivateRoute />,
        children: [
          {
            path: '/',
            index: true,
            element: <Home />,
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'management',
            element: <Management />,
          },
        ],
      },
      {
        path: '/',
        element: <PublicRoute />,
        children: [
          {
            path: 'registration',
            element: <Registration />,
          },
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'auth/activation',
            element: <Auth />,
            children: [
              {
                path: ':token',
                element: <Activation />,
              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
