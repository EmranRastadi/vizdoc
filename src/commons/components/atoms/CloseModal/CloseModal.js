import { Container } from './style';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '@mui/material';
export default function CloseModal(props) {
  return (
    <Container {...props}>
      <AiOutlineClose color="#212121" />
    </Container>
  );
}
