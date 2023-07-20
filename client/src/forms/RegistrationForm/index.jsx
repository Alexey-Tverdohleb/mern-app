import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import useToast from '../../context/ToastContext/useToast';
import initialValues from './initialValues.js';
import registerUser from '../../api/auth/registerUser.js';

const RegistrationForm = ({ children }) => {
  const { showError, showSuccess } = useToast();

  const onSubmit = async (values, formikActions) => {
    try {
      const { message } = await registerUser(values);
      formikActions.resetForm();
      console.log(message);
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

RegistrationForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default RegistrationForm;
