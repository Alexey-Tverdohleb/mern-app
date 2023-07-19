import PropTypes from 'prop-types';

import noop from '../../helpers/noop.js';
import { ButtonStyled } from './style';

const Button = ({ label, disabled, type, onClick }) => (
  <ButtonStyled disabled={disabled} type={type} onClick={onClick}>
    {label}
  </ButtonStyled>
);

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: '',
  disabled: false,
  type: 'button',
  onClick: noop,
};

export default Button;
