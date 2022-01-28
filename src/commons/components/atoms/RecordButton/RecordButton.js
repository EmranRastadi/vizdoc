import { Container } from './style';
import { BsFillRecordFill } from 'react-icons/bs';
export default function RecordButton(props) {
  return (
    <Container {...props}>
      <BsFillRecordFill />
    </Container>
  );
}
