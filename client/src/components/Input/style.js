import styled from 'styled-components';

import { accentColor, lightGray } from '../../constants/colors';

export const FormInput = styled.input`
  background-color: ${lightGray};
  border: none;
  border-bottom: 2px solid ${lightGray};
  margin-bottom: 20px;
  padding: 15px;
  width: 100%;

  &:focus {
    border-bottom: 2px solid ${accentColor};
  }
`;
