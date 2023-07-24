import styled from 'styled-components';

import { ACCENT_COLOR, TEXT_WHITE } from '../../constants/colors';

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 15px;
  font-weight: 700;
  font-size: 16px;
  background-color: ${({ $background }) => $background ?? ACCENT_COLOR};
  border: 1px solid ${({ $background }) => $background ?? ACCENT_COLOR};
  color: ${TEXT_WHITE};
  margin-bottom: 15px;
  cursor: pointer;
`;
