import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import activateUser from '../../api/auth/activateUser.js';
import useToast from '../../context/ToastContext/useToast.js';

const Activation = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { showError, showSuccess } = useToast();

  useEffect(() => {
    activateUser(token)
      .then(() => {
        showSuccess('Account has been successfully activated.');
        navigate('/login');
      })
      .catch((error) => {
        showError(error.message);
        navigate('/registration');
      });
  }, [token]);

  return <h1>Account activation...</h1>;
};

export default Activation;
