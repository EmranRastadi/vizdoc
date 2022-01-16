import { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { Label } from '../../../atoms';
import { CheckBoxButton } from '../../../molecules';
import { Modal } from '../..';

export default function VerifyModal() {
  const [submit, setSubmit] = useState(false);
  return (
    <Modal status={submit} setStatus={setSubmit} title={'کد تایید'}>
      <Grid item xs={'12'}>
        <Label style={{ fontSize: 12, color: '#aaa' }}>
          کد تایید به موبایل 09309003503 ویرایش ارسال شده است.لطفا در کادر زیر
          وارد کنید{' '}
        </Label>
      </Grid>

      <Grid item xs="12" style={{ marginTop: 25 }}>
        <TextField
          dir="rtl"
          style={{ fontFamily: 'yekan', textAlign: 'center' }}
          fullWidth
          id="outlined-basic"
          label="کد تایید"
          variant="outlined"
        />
      </Grid>

      <Grid item xs="12" style={{ marginTop: 25 }}>
        <CheckBoxButton onlyBtn={true} className="active" title={'تایید'} />
      </Grid>
    </Modal>
  );
}
