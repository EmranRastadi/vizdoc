import { Button } from '@mui/material';
import { Label } from '../../atoms';
import { Container } from './style';
import { useHistory } from 'react-router-dom';
import userIcon from '../../../../assets/icons/doctor-checkmark-2.svg';

export default function ExperimentButton({
  onClick,
  color,
  icon,
  title,
  background,
}) {
  const history = useHistory();
  return (
    <Container
      style={{
        background: background
          ? background
          : 'linear-gradient(to left, #a7bb2a, #d8e94a)',
      }}
    >
      <Button onClick={() => (onClick ? onClick() : history.push('/start'))}>
        {icon ? icon : <img width={'20px'} src={userIcon} />}
        <Label
          className={'expButton'}
          style={{
            fontSize: 12,
            color: color ? color : '#212121',
            fontWeight: 100,
          }}
        >
          {title ? title : 'تحلیل آنلاین آزمایش'}
        </Label>
      </Button>
    </Container>
  );
}
