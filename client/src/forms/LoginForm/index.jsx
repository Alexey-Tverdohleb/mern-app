import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import useToast from '../../context/ToastContext/useToast';
import initialValues from './initialValues';
import login from '../../api/auth/loginUser';
import { TOKEN } from '../../constants/localStorage';
import useLocalStorage from '../../context/LocalStarageContext/useLocalStorage.js';

const LoginForm = ({ children }) => {
  const { showError, showSuccess } = useToast();
  const { setStorageItem } = useLocalStorage();

  const onSubmit = async (values, formikActions) => {
    try {
      const { data, message } = await login(values);
      setStorageItem(TOKEN, data.token);
      formikActions.resetForm();
      showSuccess(message);
    } catch (error) {
      console.error(error);
      showError(error.message);
    }

    formikActions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>{children}</Form>
    </Formik>
  );
};

LoginForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default LoginForm;
