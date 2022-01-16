import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  align-items: center;
  justify-content: center;
  &.active {
    display: flex;
  }
`;

// const ModalContent = styled.div

export { ModalBackground };
