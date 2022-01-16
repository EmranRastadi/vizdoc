import { Grid } from '@mui/material';
import { ContainerImage, Detail, Image } from './style';
import { AiOutlineEye } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { ThemeProvider } from 'styled-components';
export default function ImageUploaded(props) {
  const theme = {
    detail: {
      src: props.src ? props.src : './icons/AdobeStock_93387078.jpeg',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid item md={'4'} xs={'6'}>
        <ContainerImage>
          <Detail>
            <BsTrash />
            <AiOutlineEye />
          </Detail>
        </ContainerImage>
      </Grid>
    </ThemeProvider>
  );
}
