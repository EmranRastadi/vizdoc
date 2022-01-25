import { Grid } from '@mui/material';
import { ContainerImage, DetailUplading, Image } from './style';
import { AiOutlineClose } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { ThemeProvider } from 'styled-components';
import { Modal } from './../../';
import { ProgressUpload } from '../../../molecules';
import { useState } from 'react';
export default function ImageUploading(props) {
  const theme = {
    detail: {
      src: props.src ? props.src : './icons/AdobeStock_93387078.jpeg',
    },
  };
  console.log(11111111, props.width);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid item md={'4'} xs={'6'}>
          <ContainerImage>
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
