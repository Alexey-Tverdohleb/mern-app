import styled from 'styled-components';

export const ModalBackDrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContainer = styled.div`
  min-width: ${({ $width }) => $width}px;
  min-height: ${({ $height }) => $height}px;
  padding: 20px 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
`;

export const ModalHeader = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  position: absolute;
  right: 0;
`;

export const ModalTitle = styled.h2`
  text-align: center;
`;

export const ModalBody = styled.div``;
