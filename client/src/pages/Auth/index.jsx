import { useParams, Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
  const { token } = useParams();

  if (!token) return <Navigate to="/registration" />;

  return <Outlet />;
};

export default Auth;
