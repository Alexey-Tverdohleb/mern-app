import { Link } from 'react-router-dom';

import { Wrapper, Title, SubTitle } from './style';
import SignUpEmailButton from './SignUpEmailButton';
import SignUpGoogleButton from './SignUpGoogleButton.jsx';

const Registration = () => {
  return (
    <Wrapper>
      <Title>Registration</Title>
      <SubTitle>Create new account if you don't have one</SubTitle>
      <SignUpEmailButton />
      <SignUpGoogleButton />
      <SubTitle>
        Do you have an account? Please <Link to="/login">login.</Link>
      </SubTitle>
    </Wrapper>
  );
};

export default Registration;
