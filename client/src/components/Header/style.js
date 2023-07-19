import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mediumGrey, accentColor } from '../../constants/colors';

export const NavHeader = styled.header`
  margin-bottom: 15px;
`;

export const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkItem = styled(NavLink)`
  margin-left: 15px;
  color: ${mediumGrey};
  position: relative;
  font-weight: 700;

  &.active {
    color: ${accentColor};
  }
`;
