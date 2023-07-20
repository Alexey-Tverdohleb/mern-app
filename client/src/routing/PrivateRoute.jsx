import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../context/AuthContext/useAuth.js';
import AUTH_STATUS from '../constants/auth';

const PrivateRoute = () => {
  const authStatus = useAuth();

  if (authStatus === AUTH_STATUS.pending) return null;

  if (authStatus === AUTH_STATUS.authed) return <Outlet />;

  return <Navigate to="/login" />;
};

export default PrivateRoute;
