import { Grid } from '@mui/material';
import { ContainerImage, Detail, Image } from './style';
import { AiOutlineEye } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { Modal } from '../../../molecules';
import { ThemeProvider } from 'styled-components';
import { useContext, useState } from 'react';
import { InforMationContext } from '../../../../services/Contexts/InformationStore.context';
export default function ImageUploaded(props) {
  const [modalStatus, setModalStatus] = useState(false);
  const { state, dispatch } = useContext(InforMationContext);

  const theme = {
    detail: {
      src: props.src ? props.src : './icons/AdobeStock_93387078.jpeg',
    },
  };

  function delImg() {
    console.log(props.id);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid item md={'4'} xs={'6'}>
          <ContainerImage>
            <Detail>
              <BsTrash style={{ cursor: 'pointer' }} onClick={() => delImg()} />
              <AiOutlineEye
                style={{ cursor: 'pointer' }}
                onClick={(e) => setModalStatus(true)}
              />
            </Detail>
          </ContainerImage>
        </Grid>
      </ThemeProvider>
      <Modal
        show={modalStatus}
        setShow={setModalStatus}
        title="پیشنمایش "
        src={props.src}
      />
    </>
  );
}
