import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

import {
  ModalBackDrop,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  CloseButton,
} from './styles';

const Modal = ({ isOpen, onClose, title, width, height, children }) => {
  const handleClose = () => onClose?.();

  const handleKeyDown = ({ code }) => {
    if (code !== 'Escape') return;
    // close modal on press escape button
    handleClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <ModalBackDrop onClick={handleClose}>
      <ModalContainer $width={width} $height={height} onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalBackDrop>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Modal.defaultProps = {
  title: '',
  isOpen: false,
  onClose: null,
  width: 20,
  height: 30,
};

export default Modal;
