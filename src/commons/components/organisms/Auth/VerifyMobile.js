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
          onChange={(e) => setMobile(e.target.value)}
          id="outlined-basic"
          label="شماره موبایل"
          variant="outlined"
        />
      </Grid>

      <Grid item xs="12" style={{ marginTop: 25 }}>
        <CheckBoxButton
          onClick={() => submitFormVerifyMobile()}
          onlyBtn={true}
          className="active"
          title={'ثبت'}
        />
      </Grid>
    </div>
  );
}
