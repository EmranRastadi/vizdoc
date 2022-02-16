import { alpha, styled } from '@mui/material/styles';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CircleUserStatus, Tag } from '..';
import { Style } from './style';
import moment from 'jalali-moment';
import { identifier } from 'stylis';
import { useHistory } from 'react-router-dom';
import jsCookie from 'js-cookie';

const TableCelllCustom = styled(TableCell)((theme) => ({
  borderBottom: 'unset',
  bottom: 5,
  fontFamily: 'yekan',
  background: ' #249abe',
}));

const TableRowCustom = styled(TableRow)((theme) => ({
  height: '40px',
  cursor: 'pointer',
  background: '#f4f4f4',
  borderRadius: '10px !important',
}));
const TableRowCustomActive = styled(TableRow)((theme) => ({
  height: '40px',
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
  const userId = jsCookie.get('userId');

  const history = useHistory();
  function _renderStatusPay(status) {
    if (status === 'pending_payment') {
      return 'در انتظار پرداخت';
    } else if (status === 'pending_expert') {
      return 'در انتظار پزشک';
    } else if (status === 'processing') {
      return 'در حال انجام';
    } else if (status === 'pending_customer') {
      return 'در انتظار کاربر';
    } else if (status === 'done') {
      return 'اتمام';
    } else {
      return null;
    }
  }

  function _renderWhoIs(state) {
    let gender = state.details?.gender === 'female' ? 'خانم' : 'آقا';
    let pregent = state.details?.pregnant === '1' ? 'باردار' : '';
    let age = state.details?.age + ' ساله';

    if (state?.expert?.id.toString() !== userId.toString()) {
      return state?.expert?.user?.fullname;
    } else {
      return gender + ' ' + pregent + ' ' + age;
    }
  }

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
              onClick={() => history.push(`/chat/${row.id}`)}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 10,
                padding: 10,
              }}
            >
              <CircleUserStatus
                expertFileId={
                  row?.expert?.id.toString() !== userId.toString()
                    ? row?.expert?.id.toString()
                    : null
                }
              />
              {_renderWhoIs(row)}
            </TableCelllCustom>
            <TableCelllCustom
              onClick={() => history.push(`/chat/${row.id}`)}
              align="center"
            >
              {row.details?.dr_specialist_price > 0 ? (
                <Tag>پزشک متخصص</Tag>
              ) : null}
              {row.details?.emergency_price > 0 ? <Tag>اورژانسی</Tag> : null}
            </TableCelllCustom>
            <TableCelllCustom
              className="hid-col-res"
              onClick={() => history.push(`/chat/${row.id}`)}
              align="center"
            >
              {moment(row.created_at).locale('fa').fromNow()}
            </TableCelllCustom>
            <TableCelllCustom
              className="hid-col-res"
              onClick={() => history.push(`/chat/${row.id}`)}
              align="center"
            >
              {row.amount} تومان
            </TableCelllCustom>
            <TableCelllCustom
              onClick={() => history.push(`/chat/${row.id}`)}
              align="left"
              style={{
                textAlign: 'left',
                paddingLeft: 15,
              }}
            >
              {_renderStatusPay(row.status)}
            </TableCelllCustom>
          </TableRowCustom>
        ))
      ) : (
        <h1>not found</h1>
      )}
    </TableBody>
  );
}
