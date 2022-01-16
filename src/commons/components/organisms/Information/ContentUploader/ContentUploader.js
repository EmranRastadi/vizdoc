// import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import ImageAdded from './ImageAdded';
import ImageUploaded from './ImageUploaded';
import ImageUploading from './ImageUploading';
import { Container } from './style';
import { Modal } from '../../../molecules';

export default function ContentUploader() {
  return (
    <Container>
      <Grid container spacing={3}>
        <ImageUploaded />
        <ImageUploaded />
        <ImageUploading />
        <ImageAdded />
      </Grid>

      <Modal id="modalsssss" />
    </Container>
  );
}
