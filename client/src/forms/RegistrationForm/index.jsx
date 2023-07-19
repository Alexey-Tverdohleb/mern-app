import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import initialValues from './initialValues.js';
import registerUser from '../../api/auth/registerUser.js';

const RegistrationForm = ({ children }) => {
  const onSubmit = (values, formikActions) => {
    registerUser(values)
      .then((response) => console.log(response))
      .catch(console.error)
      .finally(() => formikActions.setSubmitting(false));
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
