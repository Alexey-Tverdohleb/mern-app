import { useContext } from 'react';

import authContext from './context.js';

export default function useAuth() {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('authContext must be used within AuthProvider');
  }

  return context;
}
