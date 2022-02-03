import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 15px;
  height : 80px;
  right: 15px;
  background: #27a7d1;
  left: 15px;
  direction: ltr;
  border-radius: 15px;
  display: flex;
  opacity : 0;
  z-index: -1;
  transform : translateX(-80px);
  align-items: center;
  justify-content: center;
  flex-direction: row;
  column-gap: 9px;
  transition :0.3s all ease;
  -webkit-transition :0.3s all ease;
  -moz-transition :0.3s all ease;
  &.active{
    opacity : 1;
    z-index: 1;
    transform : translateX(0px);
  }

  .deactivate{
    display : none;
  }
  .sound-wave {
    height: 80px;
    flex:1;
    border-radius: 15px;
  }

  @media screen and (max-width: 780px) {
    .sound-wave {
      height: 80px;
      width: 200px !important;
      border-radius: 15px;
    }
  }
  audio::-webkit-media-controls-panel{
    display : none;
  }
  audio::-webkit-media-controls-mute-button{
    display : none;
  }
  audio::-webkit-media-controls-play-button{
    display : none;
  }
  audio::-webkit-media-controls-timeline-container{
    // display : none;
  }
  audio::-webkit-media-controls-current-time-display{
    display : none;
  }
  audio::-webkit-media-controls-time-remaining-display{
    display : none;
  }
  audio::-webkit-media-controls-timeline{
    display : none;
  }
  audio::-webkit-media-controls-volume-slider-container{
    display : none;
  }
  audio::-webkit-media-controls-volume-slider{
    display : none;
  }
  audio::-webkit-media-controls-seek-back-button{
    display : none;
  }
  audio::-webkit-media-controls-seek-forward-button{
    display : none;
  }
  audio::-webkit-media-controls-fullscreen-button{
    display : none;
  }
  audio::-webkit-media-controls-rewind-button{
    display : none;
  }
  audio::-webkit-media-controls-return-to-realtime-button{
    display : none;
  }
  audio::-webkit-media-controls-toggle-closed-captions-button{
    display : none;
  }
  

  audio::-webkit-media-controls-timeline {
    background-color: #B1D4E0;
    border-radius: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }


  @media screen and (max-width: 1024px) {
    .sound-wave {
      height: 80px;
      width: 200px !important;
      border-radius: 15px;
    }
`;

const ButtonContainer = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  column-gap: 6px;
  margin-right: 15px;
  &.active {
    width: 200px;
  }
`;

export { Container, ButtonContainer };
