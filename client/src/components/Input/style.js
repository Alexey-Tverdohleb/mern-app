import styled from 'styled-components';

import { ACCENT_COLOR, LIGHT_GRAY } from '../../constants/colors';

export const FormInput = styled.input`
  background-color: ${LIGHT_GRAY};
  border: none;
  border-bottom: 2px solid ${LIGHT_GRAY};
  margin-bottom: 20px;
  padding: 15px;
  width: 100%;

  &:focus {
    border-bottom: 2px solid ${ACCENT_COLOR};
  }
`;
