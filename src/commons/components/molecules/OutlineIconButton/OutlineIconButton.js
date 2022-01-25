import { Button } from '@mui/material';
import { Label } from '../../atoms';
import { Container } from './style';

export default function OutlineIconButton(props) {
  return (
    <Container {...props}>
      <Button>
        {props.icon}
        <Label
          className={'expButton'}
          style={{
            fontSize: 12,
            color: '#212121',
            fontWeight: 100,
          }}
        >
          {props.title}
        </Label>
      </Button>
    </Container>
  );
}
