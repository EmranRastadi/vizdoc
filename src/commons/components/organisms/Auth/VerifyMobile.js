import { Grid, TextField } from '@mui/material';
import { Label } from '../../atoms';
import { CheckBoxButton, Loading } from '../../molecules';
export default function VerifyMobile({
  loading,
  setMobile,
  submitFormVerifyMobile,
}) {
  return (
    <>
      <Grid item xs={'12'}>
        {loading ? <Loading /> : null}
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
    </>
  );
}
