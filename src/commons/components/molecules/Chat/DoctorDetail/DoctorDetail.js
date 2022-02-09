import { Container, DoctorImage, ContentCard, Status } from './style';
import { ChatCardDate, Label } from '../../../atoms';
import LinkButton from '../../LinkButton/LinkButton';
import { CircularProgress, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import moment from 'jalali-moment';
import jsCookie from 'js-cookie';
import { BASE_URL } from '../../../../constants/Types';
export default function DoctorDetail(props) {
  const { content } = props;
  const { expert } = content?.metadata ?? null;

  const token = jsCookie.get('loginToken');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  // consolelog()
  useEffect(() => {
    getSnapShot(expert?.user?.file_id);
  }, [expert?.user?.file_id]);

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

  return (
    <>
      <Container>
        <Grid item md={4} xs={8}>
          <DoctorImage>
            {loading ? <CircularProgress /> : <img src={image} />}
          </DoctorImage>
          <ContentCard className="card-item">
            <Label
              className="label"
              style={{
                marginTop: 27,
                fontSize: '17px',
                fontWeight: 'bolder',
              }}
            >
              {expert?.user?.name + ' ' + expert?.user?.last_name}
            </Label>
            <Label style={{ fontWeight: 100 }} className="label">
              {expert?.title ?? '...'}
            </Label>
            <Label style={{ fontWeight: 100 }} className="label">
              شماره نظام پزشکی : {expert?.number_nezam_pezeshki ?? '...'}
            </Label>
            <LinkButton
              link={expert?.link_nezam_pezeshki}
              title="لینک نظام پزشکی"
            />
          </ContentCard>
        </Grid>
      </Container>

      <Status>
        <Label style={{ fontWeight: 100, fontSize: '13px' }}>
          درخواست شما را قبول کرد
        </Label>
        <ChatCardDate
          style={{ width: '100px', height: '30px', justifyContent: 'center' }}
          date={moment(content?.created_at).locale('fa').format('YYYY/M/D')}
          time={moment(content?.created_at).locale('fa').format('H:m')}
          status={true}
        />
      </Status>
    </>
  );
}
