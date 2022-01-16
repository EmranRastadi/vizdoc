import { ModalBackground } from './style';
import { Container, Grid } from '@mui/material';
import ImagePreview from '../ImagePreview/ImagePreview';
import { useEffect, useState } from 'react';
export default function Modal(props) {
  const [show, setShow] = useState(false);
  function onClose(e) {
    e.preventDefault();
    setShow(false);
  }

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  return (
    <ModalBackground className={show ? 'active' : ''} {...props}>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid
            item
            xs="12"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ImagePreview onClose={onClose} />
          </Grid>
        </Grid>
      </Container>
    </ModalBackground>
  );
}
