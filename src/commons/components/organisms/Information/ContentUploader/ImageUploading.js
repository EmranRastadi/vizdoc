import { Grid } from '@mui/material';
import { ContainerImage, DetailUplading, Image } from './style';
import { AiOutlineClose } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { ThemeProvider } from 'styled-components';
import { ProgressUpload } from '../../../molecules';
export default function ImageUploading(props) {
  const theme = {
    detail: {
      src: props.src ? props.src : './icons/AdobeStock_93387078.jpeg',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid item md={'4'} xs={'6'}>
        <ContainerImage>
          <DetailUplading>
            <AiOutlineClose />
            <ProgressUpload />
          </DetailUplading>
        </ContainerImage>
      </Grid>
    </ThemeProvider>
  );
}
