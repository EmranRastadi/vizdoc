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
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 10px;
  margin-left: 15px;
  float: right;
  overflow: hidden;
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
