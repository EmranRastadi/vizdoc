import { ChatCardDate, ChatItemCardContainer, Label } from '../../../atoms';
import Tag from '../../Tag/Tag';
import { TagContainer } from './style';
import jsCookie from 'js-cookie';
import moment from 'jalali-moment';
export default function WhyDoIt(props) {
  const { message, user_id, created_at } = props;
  const userId = jsCookie.get('userId');

  return (
    <ChatItemCardContainer
      sender={user_id.toString() !== userId.toString() ? 'user' : ''}
      {...props}
    >
      <div style={{padding:10}} dangerouslySetInnerHTML={{ __html: message }} />

      <ChatCardDate
        date={moment(created_at).locale('fa').format('YYYY/M/D')}
        time={moment(created_at).locale('fa').format('H:m')}
        status={true}
        showOf={user_id.toString() !== userId.toString() ? false : true}
      />
    </ChatItemCardContainer>
  );
}
