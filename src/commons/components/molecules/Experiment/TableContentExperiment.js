import { alpha, styled } from '@mui/material/styles';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CircleUserStatus, Tag } from '..';
import { Style } from './style';

const TableCelllCustom = styled(TableCell)((theme) => ({
  borderBottom: 'unset',
  bottom: 5,
  background: ' #249abe',
}));

const TableRowCustom = styled(TableRow)((theme) => ({
  height: 50,
  background: '#f4f4f4',
  borderRadius: '10px !important',
}));
const TableRowCustomActive = styled(TableRow)((theme) => ({
  height: 50,
  background: 'linear-gradiant(to left , #249abe , #27c2fb)',
  borderRadius: '10px !important',
}));

let myPaddingStyle = {
  // background: 'linear-gradiant(to left , #249abe , #27c2fb)',
};

const useRowStyles = makeStyles({
  tableBody: {
    marginBottom: '15px !important',
    '& > :not(:last-child)': {
      borderRadius: 10,
      overflow: 'hidden',
    },
  },
});

export default function TableContentExperiment(props) {
  let classes = useRowStyles();

  return (
    <TableBody className={classes.tableBody}>
      {props.rows?.length ? (
        props.rows.map((row) => (
          <TableRowCustom
            style={myPaddingStyle}
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCelllCustom
              component="td"
              scope="row"
              borderRadius="15px"
              align="right"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 10,
              }}
            >
              <CircleUserStatus />
              {row.name}
            </TableCelllCustom>
            <TableCelllCustom align="center">
              <Tag>{row.experient}</Tag>
            </TableCelllCustom>
            <TableCelllCustom align="center">{row.date}</TableCelllCustom>
            <TableCelllCustom align="center">{row.price}</TableCelllCustom>
            <TableCelllCustom align="left">{row.status}</TableCelllCustom>
          </TableRowCustom>
        ))
      ) : (
        <h1>not found</h1>
      )}
    </TableBody>
  );
}
