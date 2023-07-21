import { useContext } from 'react';

import localStorageContext from './context.js';

export default function useLocalStorage() {
  const context = useContext(localStorageContext);

  if (context === undefined) {
    throw new Error('useLocalStorage must be used within LocalStorageProvider');
  }

  return context;
}
