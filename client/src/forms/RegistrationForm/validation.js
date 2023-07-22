import * as yup from 'yup';

const validationScheme = yup.object().shape({
  email: yup.string().email('Email must be valid email.').required('Email is required.'),
  name: yup.string().required('Name is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .oneOf([null, yup.ref('passwordRepeat')], 'Password and password repeat do not match.')
    .min(6, 'Password must have 6 characters at least.')
    .max(16, 'Password should not have more than 16 characters.'),
  passwordRepeat: yup
    .string()
    .required('Password is required.')
    .oneOf([null, yup.ref('password')], 'Password and password repeat do not match.')
    .min(6, 'Password must have 6 characters at least.')
    .max(16, 'Password should not have more than 16 characters.'),
});

export default validationScheme;
