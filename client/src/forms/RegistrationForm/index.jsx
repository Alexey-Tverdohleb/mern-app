import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import initialValues from './initialValues.js';

const RegistrationForm = ({ children }) => {
  const onSubmit = () => {};

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
