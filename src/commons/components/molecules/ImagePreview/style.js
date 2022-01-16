import styled from 'styled-components';
const ImageContainer = styled.div`
  width: 70%;
  min-height: 200px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Closer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  right: 20px;
  top: 20px;
  background: rgba(0, 0, 0, 0.3);
`;

export { ImageContainer, Image, Closer };
