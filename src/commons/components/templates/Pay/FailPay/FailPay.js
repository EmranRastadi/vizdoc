import { Container, Grid } from '@mui/material';
import { Label, PayCard } from '../../../atoms';
import { CheckBoxButton } from '../../../molecules';
import { PayImage } from './style';
export default function FailPay() {
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
          <PayImage src="./icons/fail.png" />
          <Label
            style={{ fontSize: '13px', fontWeight: 'bolder', margin: '15px 0' }}
          >
            پرداخت شما با مشکل مواجه شد.
          </Label>

          <CheckBoxButton
            onlyBtn={true}
            style={{ width: '100%', height: '50px' }}
            // onClick={(e) => gotToNextLevel(e)}
            className="active"
            title={'تلاش دوباره'}
          />
        </PayCard>
      </Grid>
    </Container>
  );
}
