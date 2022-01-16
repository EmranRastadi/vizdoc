import { Grid } from '@mui/material';
import { Label } from '../../atoms';
import { SearchBadge } from '../../molecules';
import { BadgeContainer } from './style';

export default function ExperimentNavTop() {
  return (
    <Grid container spacing={'3'}>
      <Grid item md="6" sm="12">
        <Label>آزمایش ها</Label>
      </Grid>
      <Grid item md="6" xs="12">
        <BadgeContainer>
          <SearchBadge />
          <SearchBadge />
          <SearchBadge />
        </BadgeContainer>
      </Grid>
    </Grid>
  );
}
