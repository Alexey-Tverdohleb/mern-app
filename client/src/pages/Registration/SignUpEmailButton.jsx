import Button from '../../components/Button';
import Modal from '../../components/Modal';
import RegistrationForm from '../../forms/RegistrationForm';
import useToggle from '../../hooks/useToggle.js';
import Input from '../../components/Input';
import { InputGroup } from '../Login/style.js';

const SignUpEmailButton = () => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <>
      <Button label="Sign Up with Email" onClick={toggleOpen} />
      <Modal isOpen={isOpen} title="Registration" onClose={toggleOpen} width="500">
        <RegistrationForm>
          <InputGroup>
            <Input type="email" placeholder="Email" name="email" />
            <Input type="text" placeholder="Name" name="name" />
            <Input type="password" placeholder="Password" name="password" />
            <Input type="password" placeholder="Repeat password" name="passwordRepeat" />
          </InputGroup>
          <Button label="Sign Up" type="submit" />
        </RegistrationForm>
      </Modal>
    </>
  );
};

export default SignUpEmailButton;
