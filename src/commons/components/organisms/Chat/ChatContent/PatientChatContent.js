import { Container } from '@mui/material';
import {
  WhyDoIt,
  ImagePreDownload,
  DoctorDetail,
  TextChat,
} from '../../../molecules';

export default function PatientChatContent() {
  return (
    <Container style={{ padding: '15px', float: 'right' }}>
      <div style={{ float: 'right', width: '100%' }}>
        <WhyDoIt type="you" />
      </div>
      <div style={{ float: 'right', width: '100%' }}>
        <ImagePreDownload src={'./icons/AdobeStock_93387078.jpeg'} type="you" />
      </div>
      <br />
      <div style={{ float: 'right', width: '100%' }}>
        <DoctorDetail />
      </div>
      <br />
      <div style={{ float: 'right', width: '100%' }}>
        <TextChat sender={'user'} />
      </div>

      <div style={{ float: 'right', width: '100%' }}>
        <TextChat sender={'you'} />
      </div>
      <br />
    </Container>
  );
}
