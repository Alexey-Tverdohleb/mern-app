import * as yup from 'yup';

const validationScheme = yup.object().shape({
  email: yup.string().email('Email must be valid email.').required('Email is required.'),
  name: yup.string().required('Name is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(6, 'Password must have 6 characters at least.')
    .max(16, 'Password should not have more than 16 characters.'),
  passwordRepeat: yup.string().required('Repeat password is required.'),
});

export default validationScheme;
