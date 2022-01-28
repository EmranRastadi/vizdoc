import { Grid } from '@mui/material';
import { BackButton, Label, UserImage } from '../../../atoms';
import { AiOutlineUser } from 'react-icons/ai';
import { HeaderContainer, UserContent, UserDetail } from '../style';
import Tag from '../../Tag/Tag';

export default function Header() {
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
                زن باردار 24 ساله
              </Label>
              <Label style={{ fontSize: '12px', color: 'rgb(219 219 219)' }}>
                24 ساله
              </Label>
            </UserContent>
          </UserDetail>
        </Grid>

        <Grid item md={6} xs={12} className="tags">
          <Tag>اورژانسی</Tag>
          <Tag>اورژانسی</Tag>
        </Grid>
      </Grid>
    </HeaderContainer>
  );
}
