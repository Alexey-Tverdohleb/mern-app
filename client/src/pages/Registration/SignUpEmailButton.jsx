import { useState } from 'react';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import RegistrationForm from '../../forms/RegistrationForm';
import { InputGroup } from '../Login/style.js';
import Input from '../../components/Input';

const SignUpEmailButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button label="Sign Up with Email" onClick={toggleIsOpen} />
      <Modal isOpen={isOpen} title="Registration" onClose={toggleIsOpen} width="500">
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
