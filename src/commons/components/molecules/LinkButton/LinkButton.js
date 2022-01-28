import { Container } from './style';
import { BsLink45Deg } from 'react-icons/bs';
import { Label } from '../../atoms';
export default function LinkButton(props) {
  const { title } = props;
  return (
    <Container>
      <BsLink45Deg />
      <Label style={{ fontSize: '13px' }}>{title}</Label>
    </Container>
  );
}
