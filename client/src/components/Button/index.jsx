import PropTypes from 'prop-types';

import noop from '../../helpers/noop.js';
import { ButtonStyled } from './style';

const Button = ({ label, disabled, type, onClick, background }) => (
  <ButtonStyled $background={background} disabled={disabled} type={type} onClick={onClick}>
    {label}
  </ButtonStyled>
);

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  background: PropTypes.string,
};

Button.defaultProps = {
  label: '',
  disabled: false,
  type: 'button',
  onClick: noop,
  background: null,
};

export default Button;
