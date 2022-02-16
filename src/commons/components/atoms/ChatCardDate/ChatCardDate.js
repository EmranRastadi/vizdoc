import Label from '../Label/Label';
import { Container } from './style';
import { BsCheckAll, BsCheck2 } from 'react-icons/bs';

export default function ChatCardDate(props) {
  const { date, time, status, style, showOf } = props;
  return (
    <Container style={style}>
      {showOf === false ? (
        ''
      ) : status ? (
        <BsCheckAll className="activated" fontSize={'16px'} />
      ) : (
        <BsCheck2 fontSize={'16px'} />
      )}
      <Label style={{ fontSize: '9px' }}>{time}</Label>
      <Label style={{ fontSize: '9px' }}>{date}</Label>
    </Container>
  );
}
