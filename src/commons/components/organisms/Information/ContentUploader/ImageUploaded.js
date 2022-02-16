import { Grid } from '@mui/material';
import { ContainerImage, Detail, Image } from './style';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFileEarmarkRichtext, BsTrash } from 'react-icons/bs';
import { Modal } from '../../../molecules';
import { ThemeProvider } from 'styled-components';
import { useContext, useState } from 'react';
import { InforMationContext } from '../../../../services/Contexts/InformationStore.context';
export default function ImageUploaded(props) {
  const { src, index } = props;
  const [modalStatus, setModalStatus] = useState(false);

  const theme = {
    detail: {
      src: props.type !== 'application/pdf' && props.src ? props.src : null,
      disp: props.type === 'application/pdf' ? 'none' : 'block',
    },
  };

  const { state, dispatch } = useContext(InforMationContext);
  function delImg(index) {
    const uploadedFileClone = [...state.uploaded];
    uploadedFileClone.splice(index, 1);
    const uploadedIdClone = [...state.uploadedId];
    uploadedIdClone.splice(index, 1);
    dispatch({
      type: 'UPLOADED',
      payload: uploadedFileClone,
    });

    dispatch({
      type: 'UPLOADED_ID',
      payload: uploadedIdClone,
    });
  }

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
            <Detail>
              <BsTrash
                style={{ cursor: 'pointer' }}
                onClick={() => delImg(index)}
              />
              <AiOutlineEye
                style={{ cursor: 'pointer' }}
                onClick={(e) => setModalStatus(true)}
              />
            </Detail>
            <img src={src} />
          </ContainerImage>
        </Grid>
      </ThemeProvider>
      <Modal
        show={modalStatus}
        setShow={setModalStatus}
        title="پیشنمایش "
        src={src}
      />
    </>
  );
}
