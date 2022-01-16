import { Button, FormControlLabel, Radio } from '@mui/material';
import { Label } from '../../atoms';
import { Container } from './style';
import { BsCheckCircleFill } from 'react-icons/bs';
export default function CheckBoxButton(props) {
  const { status, title, desc, onlyBtn } = props;
  return (
    <Container {...props}>
      <Button {...props}>
        <div className="one">
          {props.className === 'active' && !onlyBtn ? (
            <BsCheckCircleFill style={{ fontSize: '18px' }} />
          ) : null}
          <Label style={{ fontSize: 15 }}>{title}</Label>
        </div>

        <div>
          <Label style={{ fontSize: 13 }}>{desc}</Label>
        </div>
      </Button>
    </Container>
  );
}
