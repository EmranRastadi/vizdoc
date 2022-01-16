import { Label } from '../../atoms';
import { Container, CircleCount } from './style';

export default function StepItem(props) {
  const { title, num } = props;
  return (
    <Container {...props}>
      <CircleCount {...props}>{num}</CircleCount>
      <Label style={{ fontWeight: 'bolder', fontSize: 13 }}>{title}</Label>
    </Container>
  );
}
