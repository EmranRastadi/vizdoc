import { Paper, Table, TableContainer } from '@mui/material';
import { TableContentExperiment, TableHeaderExperiment } from '../../molecules';
import { Style } from './style';

export default function RenderTableExperiment(props) {
  const { data, isLoading } = props;
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
              minWidth: 250,
              border: 'unset',
              borderCollapse: 'inherit',
              borderSpacing: '0 10px',
            }}
            aria-label="simple table"
          >
            {/*<TableHeaderExperiment />*/}

            {data?.data?.data?.orders && !isLoading ? (
              data?.data?.data?.orders.length > 0 ? (
                <TableContentExperiment rows={data?.data?.data?.orders} />
              ) : (
                <p
                  style={{
                    position: 'absolute',
                    width: '100%',
                    fontSize: 17,
                    textAlign: 'center',
                  }}
                >
                  موردی یافت نشد!
                </p>
              )
            ) : null}
          </Table>
        </TableContainer>
        <br />
        {/* <Paginate /> */}
      </TableContainer>
    </Style>
  );
}
