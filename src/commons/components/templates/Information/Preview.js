import { Container, Grid, TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { Label } from '../../atoms';
import { CheckBoxButton, Loading } from '../../molecules';
import { Modal } from '../../organisms';
import { useSaveOrderData } from '../../../apis/auth.api';
import { InforMationContext } from '../../../services/Contexts/InformationStore.context';
import MobileModal from '../../organisms/Information/ContentUploader/MobileModal';
import PreviewContainer from '../../organisms/Information/ContentUploader/PreviewContainer';
import jsCookie from 'js-cookie';
export default function Preview(props) {
  const { setStep } = props;
  const token = jsCookie.get('loginToken');
  const { state } = useContext(InforMationContext);
  const [pay, setPay] = useState(false);
  const { mutate: orderMutate, loading: orderLoading } = useSaveOrderData();
  function checkPay() {
    if (token) {
      orderMutate({
        token: token,
        service_id: 1,
        age: state.information.age,
        gender: state.information.gender ? state.information.gender : 'male',
        why: state.information.why ? state.information.why : '',
        pregnant: state.information.pregnant
          ? parseInt(state.information.pregnant)
          : 0,
        history: state.information.history ? state.information.history : '',
        is_emergency: state.information.emergency === true ? 1 : 0,
        is_specialist: state.information.specialist === true ? 1 : 0,
        file_ids: state.uploadedId,
      });
    } else {
      setPay(true);
    }
  }
  return (
    <Container style={{ paddingBottom: 60, position: 'relative' }}>
      {orderLoading ? <Loading /> : null}
      <br />
      <Label style={{ marginBottom: 5, fontWeight: 'bolder' }}>
        پیشنمایش کلی
      </Label>
      <br />
      <Grid container spacing={3} style={{ marginBottom: 60 }}>
        <Grid item xs={'12'}>
          <PreviewContainer setStep={setStep} />
        </Grid>
      </Grid>

      <Grid item xs="12">
        <CheckBoxButton
          onlyBtn={true}
          className="active"
          title={'پرداخت'}
          onClick={() => checkPay()}
        />
      </Grid>

      <MobileModal setPay={setPay} pay={pay} />
    </Container>
  );
}
