import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DoctorImage = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 100%;
  background: #fff;
  background-image: url(${(props) => props?.theme?.doctor?.img});
  position: absolute;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0px;
  right: 0;
  margin: 0 auto;
  top: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Status = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin-top: -55px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    text-align: center;
    padding: 0;
  }
`;
const ContentCard = styled.div`
  background: linear-gradient(to left, rgb(37, 153, 189), rgb(40, 195, 251));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 10px;
  &.card-item {
    width: 100%;
    float: right;
    height: 220px;
    border-radius: 20px;
    .label {
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
  }
`;

export { Container, DoctorImage, ContentCard, Status };
