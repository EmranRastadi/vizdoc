// import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import ImageAdded from './ImageAdded';
import ImageUploaded from './ImageUploaded';
import ImageUploading from './ImageUploading';
import { Container } from './style';
import { Modal } from '../../../molecules';
import { InforMationContext } from './../../../../services/Contexts/InformationStore.context';
import { useCallback, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../../constants/Types';

export default function ContentUploader() {
  const { state, dispatch } = useContext(InforMationContext);
  const [progress, setProgress] = useState(0);
  function uploadFile(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('file', e.target.files[0]);
    let config = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        setProgress(percent);
      },
    };

    // let headers = {
    //   'Content-Type': 'multipart/form-data',
    // };
    let imageListClone = [...state.uploaded];

    imageListClone.push(e.target.files[0]);
    dispatch({
      type: 'UPLOADED',
      payload: imageListClone,
    });

    axios.post(BASE_URL + `storage/upload/temp`, data, config).then((res) => {
      let img_id = res?.data?.data?.file?.id;
      let imgIdClone = [...state.uploadedId];
      imgIdClone.push(img_id);
      dispatch({
        type: 'UPLOADED_ID',
        payload: imgIdClone,
      });
      setProgress(0);
    });
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {state.uploaded.map((item, index) => {
          let src = URL.createObjectURL(item);
          if (parseInt(progress) !== 0 && index === state.uploaded.length - 1) {
            return <ImageUploading src={src} width={progress} />;
          } else {
            return <ImageUploaded src={src} index={index} />;
          }
        })}

        <ImageAdded
          onChange={(e) => {
            uploadFile(e);
          }}
        />
      </Grid>

      <Modal id="modalsssss" />
    </Container>
  );
}
