import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import initialValues from './initialValues';
import login from '../../api/auth/loginUser';
import { TOKEN } from '../../constants/localStorage';

const LoginForm = ({ children }) => {
  const navigation = useNavigate();

  const onSubmit = async (values, formikActions) => {
    try {
      const { data } = await login(values);
      window.localStorage.setItem(TOKEN, data.token);
      formikActions.resetForm();
      navigation('/');
    } catch (error) {
      console.error(error);
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
