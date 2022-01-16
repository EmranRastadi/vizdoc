import { Button } from '@mui/material';
import { Label } from '../../atoms';
import { Container } from './style';

export default function ExperimentButton() {
  return (
    <Container>
      <Button>
        <img width={'20px'} src="./icons/doctor-checkmark-2.svg" />
        <Label
          className={'expButton'}
          style={{
            fontSize: 12,
            color: '#212121',
            fontWeight: 100,
          }}
        >
          تحلیل آنلاین آزمایش
        </Label>
      </Button>
    </Container>
  );
}
