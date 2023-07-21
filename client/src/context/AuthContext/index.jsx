import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import AUTH_STATUS from '../../constants/auth';
import { TOKEN } from '../../constants/localStorage.js';
import authContext from './context.js';
import checkToken from '../../api/auth/checkToken.js';
import useLocalStorage from '../LocalStarageContext/useLocalStorage.js';

const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(AUTH_STATUS.pending);

  const location = useLocation();
  const { getStorageItem, removeStorageItem } = useLocalStorage();
  const storageToken = getStorageItem(TOKEN);

  const ProviderElement = authContext.Provider;

  useEffect(() => {
    if (!storageToken) {
      setAuthStatus(AUTH_STATUS.unauthorized);
      return;
    }

    checkToken({ token: storageToken })
      .then(() => {
        setAuthStatus(AUTH_STATUS.authed);
      })
      .catch(() => {
        removeStorageItem(TOKEN);
      });
  }, [location, storageToken]);

  return <ProviderElement value={authStatus}>{children}</ProviderElement>;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AuthProvider;
