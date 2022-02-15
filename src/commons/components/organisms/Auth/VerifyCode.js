import { Grid, TextField } from '@mui/material';
import { Label } from '../../atoms';
import { CheckBoxButton, Loading } from '../../molecules';
export default function VerifyCode({
  loadingCode,
  setCode,
  submitFormVerifyCode,
  setEdit,
  mobile,
  type,
}) {
  function edit() {
    setEdit(true);
  }
  return (
    <div style={{ position: 'relative' }}>
      <Grid item xs={'12'}>
        {loadingCode ? <Loading style={{ height: '100%' }} /> : null}

        <Label style={{ fontSize: 12, color: '#aaa' }}>
          کد تایید به شماره  {mobile}{' '}
          <span
            style={{ color: '#1976d2', cursor: 'pointer' }}
            onClick={() => edit()}
          >
            ( ویرایش شماره )
          </span>{' '}
          پیامک شده است.لطفا کد دریافت شده را در کادر زیر وارد و بر روی دکمه ثبت کلیک نمایید.{' '}
        </Label>
      </Grid>

      <Grid item xs="12" style={{ marginTop: 25 }}>
        <TextField
          dir="rtl"
          style={{ fontFamily: 'yekan' }}
          inputProps={{style:{textAlign:'center', letterSpacing: 15}}}
          type="number"
          fullWidth
          onChange={(e) => setCode(e.target.value)}
          id="outlined-basic"
          label="کد تایید"
          variant="outlined"
          className={"auth-input"}
        />
      </Grid>

      <Grid item xs="12" style={{ marginTop: 25 }}>
        <CheckBoxButton
          onClick={() => submitFormVerifyCode()}
          onlyBtn={true}
          className="active"
          title={'ثبت'}
        />
      </Grid>
    </div>
  );
}
