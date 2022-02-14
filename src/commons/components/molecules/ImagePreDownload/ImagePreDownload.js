import { BackDownload, Container, ImageLoader } from './style';
import { ThemeProvider } from 'styled-components';
import { ChatCardDate, ChatItemCardContainer, Label } from '../../atoms';
import { MdOutlineDownloadForOffline } from 'react-icons/md';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'jalali-moment';
import { BASE_URL } from '../../../constants/Types';
import jsCookie from 'js-cookie';
import { CircularProgress } from '@mui/material';
export default function ImagePreDownload(props) {
  const { content, type } = props;
  const { id } = content?.file;
  const userId = jsCookie.get('userId');
  const user_id = content?.user_id;
  const token = jsCookie.get('loginToken');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  // consolelog()
  useEffect(() => {
    getSnapShot(id);
  }, [id]);

  function getSnapShot(idCom) {
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
            setImage(src);
          });
        } else {
          setImage('');
        }
      })
      .catch((e) => {
        setImage('');
        setLoading(false);
      });
  }

  const theme = {
    preImage: {
      img: loading ? '' : image,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatItemCardContainer
        onClick={() => {
          if (image) {
            window.open(image, '_blank');
          }
        }}
        style={{ width: '250px', cursor: 'pointer' }}
        className={userId.toString() === user_id.toString() ? '' : 'active'}
      >
        <Container>
          <ImageLoader>
            {loading ? (
              <BackDownload>
                <CircularProgress />
                {/* <MdOutlineDownloadForOffline /> */}
              </BackDownload>
            ) : null}
          </ImageLoader>

          <div
            style={{
              float: 'right',
            }}
          >
            <Label
              style={{
                fontSize: '14px',
                marginTop: 15,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              فایل پیوست شده
            </Label>

            <ChatCardDate
              date={moment(content?.created_at).locale('fa').format('YYYY/M/D')}
              time={moment(content?.created_at).locale('fa').format('H:m')}
              status={true}
              showOf={userId.toString() === user_id.toString() ? true : false}
            />
          </div>
        </Container>
      </ChatItemCardContainer>
    </ThemeProvider>
  );
}
