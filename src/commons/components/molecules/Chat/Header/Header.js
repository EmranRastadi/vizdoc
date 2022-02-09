import { Grid } from '@mui/material';
import { BackButton, Label, UserImage } from '../../../atoms';
import { AiOutlineUser } from 'react-icons/ai';
import { HeaderContainer, UserContent, UserDetail } from '../style';
import Tag from '../../Tag/Tag';

export default function Header(props) {
  function _renderWhoIs() {
    let gender =
      props?.data?.data?.order?.details?.gender === 'female' ? 'خانم' : 'آقا';
    let pregent =
      props?.data?.data?.order?.details?.pregnant === '1' ? 'باردار' : '';
    let age = props?.data?.data?.order?.details?.age + ' ساله';
    return gender + ' ' + pregent + ' ' + age;
  }
  return (
    <HeaderContainer>
      <Grid container style={{ height: '100%' }}>
        <Grid item md={6} xs={12} className="detail">
          <BackButton />
          <UserDetail>
            <UserImage />
            <UserContent>
              <Label
                style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}
              >
                {_renderWhoIs()}
              </Label>
              <Label style={{ fontSize: '12px', color: 'rgb(219 219 219)' }}>
                {props?.data?.data?.order?.details?.age} ساله
              </Label>
            </UserContent>
          </UserDetail>
        </Grid>

        <Grid item md={6} xs={12} className="tags">
          {props?.data?.data?.order?.details?.dr_specialist_price > 0 ? (
            <Tag>پزشک متخصص</Tag>
          ) : null}

          {props?.data?.data?.order?.details?.emergency_price > 0 ? (
            <Tag>اورژانسی</Tag>
          ) : null}
        </Grid>
      </Grid>
    </HeaderContainer>
  );
}
