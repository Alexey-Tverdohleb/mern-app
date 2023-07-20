import { useContext } from 'react';

import toastContext from './context.js';

export default function useToast() {
  const context = useContext(toastContext);

  if (context === undefined) {
    throw new Error('useToast must be used within Toast Provider');
  }

  return context;
}
