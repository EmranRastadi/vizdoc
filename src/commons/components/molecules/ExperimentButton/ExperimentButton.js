import { Button } from '@mui/material';
import { Label } from '../../atoms';
import { Container } from './style';
import { useHistory } from 'react-router-dom';
import userIcon from '../../../../assets/icons/doctor-checkmark-2.svg';

export default function ExperimentButton() {
  const history = useHistory();
  return (
    <Container>
      <Button onClick={() => history.push('/start')}>
        <img width={'20px'} src={userIcon} />
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
