import { ToastContainer, toast } from 'react-toastify';

import toastContext from './context.js';
import PropTypes from 'prop-types';

const ToastProvider = ({ children }) => {
  const ProviderElement = toastContext.Provider;

  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);
  const showWarning = (message) => toast.warn(message);

  return (
    <ProviderElement
      value={{
        showSuccess,
        showError,
        showWarning,
      }}>
      {children}
      <ToastContainer theme="colored" pauseOnHover />
    </ProviderElement>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ToastProvider;
