import React from 'react';
import { Howl, Howler } from 'howler';
import { Container } from './style';
import { BsFillPlayFill } from 'react-icons/bs';
export default function Player(props) {
  return (
    <Container {...props}>
      <BsFillPlayFill />
    </Container>
  );
}
