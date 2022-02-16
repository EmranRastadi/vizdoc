import { Grid } from '@mui/material';
import { ContainerImage, DetailUplading, Image } from './style';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeProvider } from 'styled-components';
import { Modal } from './../../';
import { ProgressUpload } from '../../../molecules';
import { useState } from 'react';
import { BsFileEarmarkRichtext } from 'react-icons/bs';
export default function ImageUploading(props) {
  const theme = {
    detail: {
      src: props.type !== 'application/pdf' && props.src ? props.src : null,
      disp: props.type === 'application/pdf' ? 'none' : 'block',
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid item md={'4'} xs={'6'}>
          <ContainerImage>
            {props.type === 'application/pdf' ? (
              <BsFileEarmarkRichtext
                style={{
                  fontSize: '40px',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  margin: 'auto',
                }}
              />
            ) : null}
            <DetailUplading>
              <AiOutlineClose />
              <ProgressUpload width={props.width} />
            </DetailUplading>
          </ContainerImage>
        </Grid>
      </ThemeProvider>
    </>
  );
}
