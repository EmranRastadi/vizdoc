import { Container, Grid } from '@mui/material';
import { Label, PayCard } from '../../../atoms';
import { CheckBoxButton } from '../../../molecules';
import { PayImage } from './style';
import {SUPPORT_PHONE_NUMBER} from "../../../../constants/Types";
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
        md={8}
        xs={10}
        style={{
          marginTop: 50,
        }}
      >
        <PayCard>
          <PayImage src="./icons/fail.png" />
          <Label
            style={{ fontSize: '16px', fontWeight: 'bolder', margin: '15px 0' }}
          >
متاسفیم! مشکلی در روند پرداخت شما رخ داده است!
          </Label>
<p style={{fontSize:'13px',margin:0}}>درصورت کسر مبلغی از حساب در مدت حداکثر ۷۲ ساعت مبلع به حساب شما باز خواهد گشت.</p>
            <p> جهت اطلاعات بیشتر می توانید با شماره تلفن <a href={`tel:${SUPPORT_PHONE_NUMBER}`}>{SUPPORT_PHONE_NUMBER}</a>  در ارتباط باشید. </p>
          <CheckBoxButton
            onlyBtn={true}
            style={{ width: '100%', height: '50px' }}
            onClick={(e) => this.props.history.push('chat')}
            className="active"
            title={'بازگشت به لیست درخواست ها'}
          />
        </PayCard>
      </Grid>
    </Container>
  );
}
