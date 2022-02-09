import { Container } from './style';
import { BsLink45Deg } from 'react-icons/bs';
import { Label } from '../../atoms';
export default function LinkButton(props) {
  const { title, link } = props;
  return (
    <Container onClick={() => window.open(link, '_blank')}>
      <BsLink45Deg />
      <Label style={{ fontSize: '13px' }}>{title}</Label>
    </Container>
  );
}
