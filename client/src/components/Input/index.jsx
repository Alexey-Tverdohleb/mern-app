import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';

import { FormInput, InputError, InputWrapper } from './style';

const Input = ({ name, type, placeholder, disabled }) => {
  const [field, { error }] = useField({ name });
  const { isSubmitting } = useFormikContext();

  return (
    <InputWrapper>
      <FormInput
        type={type}
        placeholder={placeholder}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        disabled={disabled || isSubmitting}
        $error={error}
      />
      <InputError>{error}</InputError>
    </InputWrapper>
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
