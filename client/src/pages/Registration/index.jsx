import RegistrationForm from '../../forms/RegistrationForm/index.jsx';
import Input from '../../components/Input/index.jsx';
import { InputGroup, FormWrapper, Title } from './style';

const Registration = () => {
  return (
    <FormWrapper>
      <RegistrationForm>
        <Title>Registration</Title>
        <InputGroup>
          <Input type="email" placeholder="Email" name="email" />
          <Input type="text" placeholder="Name" name="name" />
          <Input type="password" placeholder="Password" name="password" />
          <Input type="password" placeholder="Repeat password" name="passwordRepeat" />
        </InputGroup>
      </RegistrationForm>
    </FormWrapper>
  );
};

export default Registration;
