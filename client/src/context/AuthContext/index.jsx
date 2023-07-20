import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AUTH_STATUS from '../../constants/auth';
import { TOKEN } from '../../constants/localStorage.js';
import authContext from './context.js';

const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(AUTH_STATUS.pending);

  const ProviderElement = authContext.Provider;

  useEffect(() => {
    const storageToken = window.localStorage.getItem(TOKEN);

    if (!storageToken) {
      setAuthStatus(AUTH_STATUS.unauthorized);
      return;
    }

    setAuthStatus(AUTH_STATUS.authed);
  }, []);

  return <ProviderElement value={authStatus}>{children}</ProviderElement>;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AuthProvider;
