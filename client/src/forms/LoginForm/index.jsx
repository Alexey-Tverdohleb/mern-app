import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import initialValues from './initialValues.js';

const LoginForm = ({ children }) => {
  const onSubmit = (values, formicActions) => {
    console.log('Login form', values);
    formicActions.setSubmitting(false);
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
