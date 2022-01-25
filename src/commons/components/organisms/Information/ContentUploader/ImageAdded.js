import { Grid } from '@mui/material';
import { ContainerImageAdd } from '../../../templates/Information/style';
import { AiOutlinePlus } from 'react-icons/ai';
export default function ImageAdded(props) {
  return (
    <Grid item md={'4'} xs={'6'}>
      <ContainerImageAdd>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => props.onChange(e)}
        />
        <AiOutlinePlus />
      </ContainerImageAdd>
    </Grid>
  );
}
