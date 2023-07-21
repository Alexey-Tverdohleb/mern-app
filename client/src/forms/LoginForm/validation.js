import * as yup from 'yup';

const validationScheme = yup.object().shape({
  email: yup.string().email('Email should be valid email.').required('Email is required.'),
  password: yup.string().required('Password is required.'),
});

export default validationScheme;
