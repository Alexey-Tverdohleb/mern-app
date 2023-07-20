import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../context/AuthContext/useAuth.js';
import AUTH_STATUS from '../constants/auth';

const PublicRoute = () => {
  const authStatus = useAuth();

  if (authStatus === AUTH_STATUS.pending) return null;

  if (authStatus === AUTH_STATUS.unauthorized) return <Outlet />;

  return <Navigate to="/" />;
};

export default PublicRoute;
