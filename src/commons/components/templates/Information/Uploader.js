import { Container, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNotifyManager } from '../../../hooks/Toastify';
import { InforMationContext } from '../../../services/Contexts/InformationStore.context';
import { Label } from '../../atoms';
import { CheckBoxButton } from '../../molecules';
import { ContentUploader } from '../../organisms';

export default function Uploader(props) {
  const { setStep } = props;
  const { state, dispatch } = useContext(InforMationContext);
  const { notifyError } = useNotifyManager();
  function gotToNextLevel(event) {
    event.preventDefault();
    if (state.uploadedId.length > 0) {
      setStep(2);
      dispatch({
        type: 'TAB_SELECTED',
        payload: 2,
      });
    } else {
      notifyError('حداقل یک فایل انتخاب کنید');
    }
    // dispatch(setVisitInformation(data));
  }
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
        <CheckBoxButton
          onClick={(event) => gotToNextLevel(event)}
          onlyBtn={true}
          className="active"
          title={'مرحله بعد'}
        />
      </Grid>
    </Container>
  );
}
