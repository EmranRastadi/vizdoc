import { Grid, TextField } from '@mui/material';
import { Label } from '../../atoms';
import { CheckBoxButton, Loading } from '../../molecules';
export default function VerifyMobile({
  loading,
  setMobile,
  submitFormVerifyMobile,
}) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {loading ? <Loading style={{ height: '100%' }} /> : null}

      <Grid item xs={'12'}>
        <Label style={{ fontSize: 12, color: '#aaa' }}>
          برای ورود به ویزداک کافیست شماره تلفن همراه خود را وارد کنید و بر روی دکمه ورود یا ثبت نام کلیک کنید.
        </Label>
      </Grid>

      <Grid item xs="12" style={{ marginTop: 25 }}>
        <TextField
          dir="rtl"
          style={{ fontFamily: 'yekan',textAlign:'center', }}
          inputProps={{style:{textAlign:'center', letterSpacing: 10}}}
          fullWidth
          type="number"
          onChange={(e) => setMobile(e.target.value)}
          id="outlined-basic"
          label="شماره تلفن همراه"
          variant="outlined"
        />
      </Grid>

      <Grid item xs="12" style={{ marginTop: 25 }}>
        <CheckBoxButton
          onClick={() => submitFormVerifyMobile()}
          onlyBtn={true}
          className="active"
          title={'ورود یا ثبت نام'}
        />
      </Grid>
    </div>
  );
}
