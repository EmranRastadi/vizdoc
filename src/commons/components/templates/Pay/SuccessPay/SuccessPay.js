import { Container, Grid } from '@mui/material';
import { Label, PayCard } from '../../../atoms';
import { CheckBoxButton } from '../../../molecules';
import { PayImage } from './style';
export default function SuccessPay() {
  return (
    <Container
      maxWidth="md"
      style={{
        marginBottom: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        md={4}
        xs={10}
        style={{
          marginTop: 50,
        }}
      >
        <PayCard>
          <PayImage src="./icons/success.png" />
          <Label
            style={{ fontSize: '13px', fontWeight: 'bolder', margin: '15px 0' }}
          >
            پرداخت شما با موفقیت انجام شد.
          </Label>

          <Label style={{ fontSize: '12px' }}>
            آزمایش شما به دکتر ارسال شد
          </Label>
          <Label style={{ fontSize: '12px' }}>
            پس از قبول کردن دکتر در اولین فرصت به آزمایش شما پاسخ داده خواهد شد.
          </Label>
          <Label style={{ fontSize: '12px' }}>
            این زمان ممکن است بین 30 الی 60 دقیقه طول بکشد.
          </Label>

          <CheckBoxButton
            onlyBtn={true}
            style={{ width: '100%', height: '50px' }}
            // onClick={(e) => gotToNextLevel(e)}
            className="active"
            title={'ورود به صفحه آزمایش'}
          />
        </PayCard>
      </Grid>
    </Container>
  );
}
