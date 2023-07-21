import styled from 'styled-components';

import { ACCENT_COLOR, LIGHT_GRAY, ERROR_COLOR } from '../../constants/colors';

export const InputWrapper = styled.div`
  width: 100%;
`;

export const FormInput = styled.input`
  background-color: ${LIGHT_GRAY};
  border: none;
  border-bottom: 2px solid ${({ $error }) => (!!$error ? ERROR_COLOR : LIGHT_GRAY)};
  padding: 15px;
  width: 100%;

  &:focus {
    border-bottom: 2px solid ${ACCENT_COLOR};
  }
`;

export const InputError = styled.div`
  padding: 10px 15px 10px;
  text-align: left;
  color: ${ERROR_COLOR};
  height: 15px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;
