import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { MEDIUM_GRAY, ACCENT_COLOR } from '../../constants/colors';

export const NavHeader = styled.header`
  margin-bottom: 15px;
`;

export const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkItem = styled(NavLink)`
  margin-right: 15px;
  color: ${MEDIUM_GRAY};
  position: relative;
  font-weight: 700;

  &.active {
    color: ${ACCENT_COLOR};
  }
`;

export const Logout = styled.button`
  background-color: transparent;
  padding: 10px 1px;
  font-weight: 700;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-left: 15px;
`;
