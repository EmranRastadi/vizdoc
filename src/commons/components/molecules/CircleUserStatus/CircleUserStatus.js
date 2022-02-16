import { Container } from './style';
import { AiOutlineUser } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import jsCookie from 'js-cookie';
import { ThemeProvider } from 'styled-components';
import { BASE_URL } from '../../../constants/Types';
export default function CircleUserStatus({ expertFileId }) {
  const token = jsCookie.get('loginAuth');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
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

  useEffect(() => {
    if (expertFileId) {
      getSnapShot(expertFileId);
    }
  }, [expertFileId]);
  const theme = {
    profIcon: {
      src: image ?? null,
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {image ? <div className="prof-icon" /> : <AiOutlineUser />}
      </Container>
    </ThemeProvider>
  );
}
