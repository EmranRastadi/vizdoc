import { Container, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { Label } from '../../atoms';
import { CheckBoxButton } from '../../molecules';
import { Modal } from '../../organisms';
import MobileModal from '../../organisms/Information/ContentUploader/MobileModal';
import PreviewContainer from '../../organisms/Information/ContentUploader/PreviewContainer';
import VerifyModal from '../../organisms/Information/ContentUploader/VerifyModal';

export default function Preview() {
  const [mobile, setMobile] = useState(null);
  return (
    <Container style={{ paddingBottom: 60 }}>
      <br />
      <Label style={{ marginBottom: 5, fontWeight: 'bolder' }}>
        پیشنمایش کلی
      </Label>
      <br />
      <Grid container spacing={3} style={{ marginBottom: 60 }}>
        <Grid item xs={'12'}>
          <PreviewContainer />
        </Grid>
      </Grid>

      <Grid item xs="12">
        <CheckBoxButton
          onlyBtn={true}
          className="active"
          title={'پرداخت'}
          // onClick={() => setPay(true)}
        />
      </Grid>

      <MobileModal />

      <VerifyModal />
    </Container>
  );
}
