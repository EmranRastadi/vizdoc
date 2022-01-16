import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { Modal } from '../..';
import { Label } from '../../../atoms';
import { CheckBoxButton } from '../../../molecules';

export default function MobileModal() {
  const [pay, setPay] = useState(false);

  return (
    <Modal status={pay} setStatus={setPay} title={'شماره موبایل'}>
      <Grid item xs={'12'}>
        <Label style={{ fontSize: 12, color: '#aaa' }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
        </Label>
      </Grid>

      <Grid item xs="12" style={{ marginTop: 25 }}>
        <TextField
          dir="rtl"
          style={{ fontFamily: 'yekan' }}
          fullWidth
          id="outlined-basic"
          label="شماره موبایل"
          variant="outlined"
        />
      </Grid>

      <Grid item xs="12" style={{ marginTop: 25 }}>
        <CheckBoxButton onlyBtn={true} className="active" title={'ثبت'} />
      </Grid>
    </Modal>
  );
}
