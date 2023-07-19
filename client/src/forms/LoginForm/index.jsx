import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import initialValues from './initialValues.js';
import login from '../../api/auth/loginUser.js';

const LoginForm = ({ children }) => {
  const onSubmit = (values, formicActions) => {
    login(values)
      .then((response) => console.log(response))
      .catch(console.error)
      .finally(() => formicActions.setSubmitting(false));
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
