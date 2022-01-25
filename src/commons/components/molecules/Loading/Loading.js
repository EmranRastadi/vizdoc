import { CircularProgress } from '@mui/material';
import { Label } from '../../atoms';
import { Container, Progress } from './style';

export default function Loading() {
  return (
    <Container>
      <Progress>
        <CircularProgress style={{ color: '#212121' }} />
        <Label style={{ fontSize: '18px' }}>منتظر بمانید ...</Label>
      </Progress>
    </Container>
  );
}
