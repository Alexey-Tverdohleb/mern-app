import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import AUTH_STATUS from '../../constants/auth';
import { TOKEN } from '../../constants/localStorage.js';
import authContext from './context.js';

const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(AUTH_STATUS.pending);
  const location = useLocation();

  const ProviderElement = authContext.Provider;

  useEffect(() => {
    const storageToken = window.localStorage.getItem(TOKEN);

    if (!storageToken) {
      setAuthStatus(AUTH_STATUS.unauthorized);
      return;
    }

    setAuthStatus(AUTH_STATUS.authed);
  }, [location]);

  return <ProviderElement value={authStatus}>{children}</ProviderElement>;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AuthProvider;
