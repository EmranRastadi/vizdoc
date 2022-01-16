import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 26px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  position: relative;
`;

const ProgressUntil = styled.div`
  width: ${(props) => props.theme.progress.width};
  height: 22px;
  background: #fff;
  border-radius: 6px;
  transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  position: absolute;
  left: 2px;
  top: 2px;
  bottom: 2px;
  &:after {
    position: absolute;
    content: '30%';
    color: #212121;
    right: 5px;
    top: 2px;
    font-size: 11px;
    font-family: yekan;
  }
`;
export { Container, ProgressUntil };
