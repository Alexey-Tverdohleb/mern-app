import LoginForm from '../../forms/LoginForm/index.jsx';
import Input from '../../components/Input/index.jsx';
import { InputGroup, FormWrapper, Title } from './style.js';
import Button from '../../components/Button/index.jsx';

const Login = () => {
  return (
    <FormWrapper>
      <LoginForm>
        <Title>Login</Title>
        <InputGroup>
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
        </InputGroup>
        <Button label="Sign In" type="submit" />
      </LoginForm>
    </FormWrapper>
  );
};

export default Login;
