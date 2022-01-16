import { Grid } from '@mui/material';
import { ContainerImageAdd } from '../../../templates/Information/style';
import { AiOutlinePlus } from 'react-icons/ai';
export default function ImageAdded() {
  return (
    <Grid item md={'4'} xs={'6'}>
      <ContainerImageAdd>
        <AiOutlinePlus />
      </ContainerImageAdd>
    </Grid>
  );
}
