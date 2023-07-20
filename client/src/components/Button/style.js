import styled from 'styled-components';

import { ACCENT_COLOR, TEXT_WHITE } from '../../constants/colors';

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 15px;
  font-weight: 700;
  font-size: 16px;
  background-color: ${ACCENT_COLOR};
  border: 1px solid ${ACCENT_COLOR};
  color: ${TEXT_WHITE};
`;
