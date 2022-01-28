import { Container } from './style';

export default function VoiceActionButton(props) {
  return <Container {...props}>{props.children}</Container>;
}
