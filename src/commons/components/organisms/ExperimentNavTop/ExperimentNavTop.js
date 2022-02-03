import { Grid } from '@mui/material';
import { Label } from '../../atoms';
import { SearchBadge } from '../../molecules';
import { BadgeContainer } from './style';

export default function ExperimentNavTop(props) {
  return (
    <Grid container spacing={'3'}>
      <Grid item sm="6" sx="12" className="responsive-box">
        <Label>آزمایش ها</Label>
      </Grid>
      <Grid item sm="6" sx="12" className="responsive-box">
        <BadgeContainer>
          <SearchBadge {...props} title="جدیدترین ها" name="newest" />
          <SearchBadge {...props} title="فعال ها" name="active" />
          <SearchBadge {...props} title="خوانده نشده ها" name="unread" />
        </BadgeContainer>
      </Grid>
    </Grid>
  );
}
