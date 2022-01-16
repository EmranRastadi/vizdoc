import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;
const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: url(${(props) => props.theme.detail.src});
  background-size: cover;
`;

const Detail = styled.div`
  position: absolute;
  height: 40px;
  background: rgba(0, 0, 0, 0.8);
  bottom: 5px;
  right: 5px;
  left: 5px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
`;

const DetailUplading = styled.div`
  display: flex;
  position: absolute;
  height: 40px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  font-size: 20px;
  color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export { DetailUplading, Container, ContainerImage, Detail, Image };
