import ReactPlayer from 'react-player/lazy';
import { ChatCardDate, ChatItemCardContainer, Label } from '../../atoms';
import { Container, ImageLoader } from './style';
import jsCookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../../constants/Types';
import { MainProg } from '../../organisms/Chat/PatientAnswerBox/style';
import { CircularProgress } from '@mui/material';
import moment from 'jalali-moment';
export default function AudioPlayer(props) {
  const { voice, content, type } = props;
  const { id } = content?.file;
  const { user_id } = content;
  const token = jsCookie.get('loginToken');
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState('');
  const userId = jsCookie.get('userId');
  // consolelog()
  useEffect(() => {
    getFileSource(id);
  }, [id]);

  function getFileSource(idCom) {
    setLoading(true);
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(BASE_URL + 'storage/show/' + idCom, requestOptions)
      .then((res) => {
        setLoading(false);
        if (res?.status === 200) {
          res.blob().then((resBlob) => {
            const src = URL.createObjectURL(resBlob);
            setFile(src);
          });
        } else {
          setFile('');
        }
      })
      .catch((e) => {
        setFile('');
        setLoading(false);
      });
  }
  return (
    <ChatItemCardContainer
      style={{
        width: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      sender={user_id.toString() === userId.toString() ? '' : 'user'}
      className={type === 'you' ? '' : 'active'}
    >
      <Container>
        <div>
          <audio controls="controls" src={file} type="*/*" />
        </div>

        <div
          style={{
            float: 'right',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {loading ? (
            <MainProg style={{ width: '30px', height: '30px' }}>
              <CircularProgress style={{ width: '30px', height: '30px' }} />
            </MainProg>
          ) : null}
          <ChatCardDate
            date={moment(content?.created_at).locale('fa').format('YYYY/M/D')}
            time={moment(content?.created_at).locale('fa').format('H:m')}
            showOf={userId.toString() === user_id.toString() ? true : false}
            status={true}
          />
        </div>
      </Container>
    </ChatItemCardContainer>
  );
}
