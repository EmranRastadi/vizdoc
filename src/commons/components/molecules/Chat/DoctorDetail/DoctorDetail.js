import { Container, DoctorImage, ContentCard, Status } from './style';
import { ChatCardDate, Label } from '../../../atoms';
import LinkButton from '../../LinkButton/LinkButton';
import { Grid } from '@mui/material';
export default function DoctorDetail(props) {
  const { src, name, code, takhas, link, date, time } = props;
  return (
    <>
      <Container>
        <Grid item md={4} xs={8}>
          <DoctorImage>
            <img src={'./icons/AdobeStock_93387078.jpeg'} />
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
              عمران رستادی
            </Label>
            <Label style={{ fontWeight: 100 }} className="label">
              متخصص اعصاب و روان
            </Label>
            <Label style={{ fontWeight: 100 }} className="label">
              شماره نظام پزشکی : 1044451
            </Label>
            <LinkButton title="لینک نظام پزشکی" />
          </ContentCard>
        </Grid>
      </Container>

      <Status>
        <Label style={{ fontWeight: 100, fontSize: '13px' }}>
          درخواست شما را قبول کرد
        </Label>
        <ChatCardDate
          style={{ width: '100px', height: '30px', justifyContent: 'center' }}
          date={'1400/11/20'}
          time={'20:50'}
          showOf={true}
          status={true}
        />
      </Status>
    </>
  );
}
