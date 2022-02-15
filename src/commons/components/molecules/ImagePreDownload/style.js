import styled from 'styled-components';

const Container = styled.div`
  .actived {
    background: linear-gradient(to left, rgb(37, 153, 189), rgb(40, 195, 251));
    color: #fff;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const ImageLoader = styled.div`
  position: relative;
  border-radius: 7px;
  margin-left: 15px;
  width: 80px;
  height: 80px;
  float: right;
  overflow: hidden;
  background-image: url(${(props) => props?.theme?.preImage?.img});
  background-size: cover;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: auto;
    height: auto;
  }
`;

const BackDownload = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0 0 0 / 40%);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  color: #fff;
  cursor: pointer;
`;
export { Container, BackDownload, ImageLoader };
