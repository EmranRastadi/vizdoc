import { makeStyles, Paper, Table, TableContainer } from '@mui/material';
import {
  Paginate,
  TableContentExperiment,
  TableHeaderExperiment,
} from '../../molecules';
import { Style } from './style';

export default function RenderTableExperiment() {
  const sample = [
    {
      status: 'active',
      name: 'emran rastai',
      experient: 'دکتر خصوصی',
      date: '20/11/74 20:20',
      price: 350000,
      read: 'unread',
    },
    {
      status: 'active',
      name: 'emran rastai',
      experient: 'khooonrizi',
      date: '20/11/74 20:20',
      price: 350000,
      read: 'unread',
    },
    {
      status: 'active',
      name: 'emran rastai',
      experient: 'khooonrizi',
      date: '20/11/74 20:20',
      price: 350000,
      read: 'unread',
    },
  ];
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

            <TableContentExperiment rows={sample} />
          </Table>
        </TableContainer>
        <br />
        <Paginate />
      </TableContainer>
    </Style>
  );
}
