import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';

import { FormInput } from './style';

const Input = ({ name, type, placeholder, disabled }) => {
  const [field] = useField({ name });
  const { isSubmitting } = useFormikContext();

  return (
    <FormInput
      type={type}
      placeholder={placeholder}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      disabled={disabled || isSubmitting}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
};

export default Input;
