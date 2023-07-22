import { Link } from 'react-router-dom';

import { Wrapper, Title, SubTitle } from './style.js';
import LoginEmailButton from './LoginEmailButton';

const Login = () => {
  return (
    <Wrapper>
      <Title>Login</Title>
      <SubTitle>Sign in you account to use the app</SubTitle>
      <LoginEmailButton />
      <SubTitle>
        Don't have an account? You can create <Link to="/registration">new one.</Link>
      </SubTitle>
    </Wrapper>
  );
};

export default Login;
