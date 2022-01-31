import { makeStyles, Paper, Table, TableContainer } from '@mui/material';
import {
  Paginate,
  TableContentExperiment,
  TableHeaderExperiment,
} from '../../molecules';
import { Style } from './style';

export default function RenderTableExperiment(props) {
  const { data, isLoading } = props;
  console.log(data?.data?.data?.orders);

  return (
    <Style>
      <TableContainer>
        <TableContainer
          style={{ border: 'unset', boxShadow: 'unset' }}
          component={Paper}
          dir="rtl"
        >
          <Table
            style={{ border: 'unset' }}
            // className="table table-curved"
            sx={{
              minWidth: 650,
              border: 'unset',
              borderCollapse: 'inherit',
              borderSpacing: '0 10px',
            }}
            aria-label="simple table"
          >
            <TableHeaderExperiment />

            {data?.data?.data?.orders && !isLoading ? (
              <TableContentExperiment rows={data?.data?.data?.orders} />
            ) : null}
          </Table>
        </TableContainer>
        <br />
        {/* <Paginate /> */}
      </TableContainer>
    </Style>
  );
}
