import PropTypes from 'prop-types';

import { StyledContainer } from './style.js';

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Container.defaultProps = {
  children: null,
};

export default Container;
