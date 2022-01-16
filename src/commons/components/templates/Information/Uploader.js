import { Container, Grid } from '@mui/material';
import { Label } from '../../atoms';
import { CheckBoxButton } from '../../molecules';
import { ContentUploader } from '../../organisms';

export default function Uploader() {
  return (
    <Container style={{ paddingBottom: 60 }}>
      <br />
      <Label style={{ marginBottom: 5, fontWeight: 'bolder' }}>
        آپلود آزمایش
      </Label>
      <Label style={{ fontSize: 13, color: '#aaa' }}>
        آزمایش سی تی اسکن ، پاتولوژی و ...
      </Label>

      <br />
      <Grid container spacing={3} style={{ marginBottom: 60 }}>
        <Grid item xs={'12'}>
          <ContentUploader />
        </Grid>
      </Grid>

      <Grid item xs="12">
        <CheckBoxButton onlyBtn={true} className="active" title={'مرحله بعد'} />
      </Grid>
    </Container>
  );
}
