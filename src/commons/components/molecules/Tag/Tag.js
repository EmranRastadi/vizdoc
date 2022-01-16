import { Container } from './style';

export default function Tag(props) {
  return <Container {...props}>{props.children}</Container>;
}
