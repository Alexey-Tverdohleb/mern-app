import styled from 'styled-components';

import { accentColor, textWhite } from '../../constants/colors';

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 15px;
  font-weight: 700;
  font-size: 16px;
  background-color: ${accentColor};
  border: 1px solid ${accentColor};
  color: ${textWhite};
`;
