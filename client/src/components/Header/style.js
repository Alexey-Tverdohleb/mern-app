import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavHeader = styled.header`
  margin-bottom: 15px;
`;

export const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkItem = styled(NavLink)`
  margin-left: 10px;
  color: #636e6e;
  position: relative;

  &.active {
    color: #000;
  }
`;
