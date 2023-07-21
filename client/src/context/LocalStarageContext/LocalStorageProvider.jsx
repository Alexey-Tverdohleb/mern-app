import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import localStorageContext from './context.js';
import { STORAGE_KEYS } from '../../constants/localStorage.js';

export default function LocalStorageProvider({ children }) {
  const ProviderElement = localStorageContext.Provider;

  const [localStorageState, setLocalStorageState] = useState(null);

  // init local storage values at first render
  useEffect(() => {
    const localStorageItems = STORAGE_KEYS.reduce((storage, key) => {
      const item = window.localStorage.getItem(key);

      if (item === undefined) return storage;

      return { ...storage, [key]: item };
    }, {});

    setLocalStorageState(localStorageItems);
  }, []);

  // set item in localStorage on state change
  useEffect(() => {
    if (!localStorageState) return;

    STORAGE_KEYS.forEach((key) => {
      const value = localStorageState[key];

      if (value === undefined) {
        window.localStorage.removeItem(key);
      }

      window.localStorage.setItem(key, value);
    });
  }, [localStorageState]);

  const setStorageItem = (key, value) =>
    setLocalStorageState((prevState) => ({ ...prevState, [key]: value }));

  const removeStorageItem = (key) => {
    const keys = Object.keys(localStorageState).filter((storageKey) => storageKey !== key);
    setLocalStorageState((prevState) => {
      return keys.reduce((store, key) => ({ ...store, [key]: prevState[key] }), {});
    });
  };

  const getStorageItem = (key) => {
    return localStorageState?.[key];
  };

  return (
    <ProviderElement value={{ setStorageItem, removeStorageItem, getStorageItem }}>
      {children}
    </ProviderElement>
  );
}

LocalStorageProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
