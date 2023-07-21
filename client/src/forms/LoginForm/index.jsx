import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import useToast from '../../context/ToastContext/useToast';
import initialValues from './initialValues';
import login from '../../api/auth/loginUser';
import { TOKEN } from '../../constants/localStorage';
import useLocalStorage from '../../context/LocalStarageContext/useLocalStorage.js';
import validationScheme from './validation.js';

const LoginForm = ({ children }) => {
  const { showSuccess } = useToast();
  const { setStorageItem } = useLocalStorage();

  const onSubmit = async (values, formikActions) => {
    try {
      const { data, message } = await login(values);
      setStorageItem(TOKEN, data.token);
      formikActions.resetForm();
      showSuccess(message);
    } catch (error) {
      console.error(error);
      formikActions.setErrors({
        email: 'Email or password does not match.',
        password: 'Email or password does not match.',
      });
    }

    formikActions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationScheme}
      validateOnBlur={false}
      validateOnChange={false}>
      <Form>{children}</Form>
    </Formik>
  );
};

LoginForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default LoginForm;
