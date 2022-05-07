import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import userIcon from '../../../../assets/icons/doctor-checkmark-2.svg';
import { Label } from '../../atoms';
import { Container } from './style';

export default function ExperimentButton({
  onClick,
  color,
  icon,
  title,
  background,
  fontSize = 12,
  boderRadius = 0,
  borderWidth = 0,
  borderColor = '#00000000',
  border=''

}) {
  const history = useHistory();
  return (
    <Container
      style={{
        background: background
          ? background
          : 'linear-gradient(to left, #a7bb2a, #d8e94a)',
          boderRadius,
          borderWidth,
          borderColor,
          border
      }}
    >
      <Button onClick={() => (onClick ? onClick() : history.push('/start'))}>
        {icon ? icon : <img width={'20px'} src={userIcon} />}
        <Label
          className={'expButton'}
          style={{
            fontSize,
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
