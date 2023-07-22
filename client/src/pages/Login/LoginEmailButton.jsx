import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import LoginForm from '../../forms/LoginForm';
import useToggle from '../../hooks/useToggle.js';
import { InputGroup } from './style.js';

const loginEmailButton = () => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <>
      <Button label="Sign In with Email" onClick={toggleOpen} />
      <Modal isOpen={isOpen} title="Login" onClose={toggleOpen} width="500">
        <LoginForm>
          <InputGroup>
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
          </InputGroup>
          <Button label="Sign In" type="submit" />
        </LoginForm>
      </Modal>
    </>
  );
};

export default loginEmailButton;
