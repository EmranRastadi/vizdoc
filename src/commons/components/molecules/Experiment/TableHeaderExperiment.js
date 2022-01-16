import { TableCell, TableHead, TableRow, withStyles } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const TableCellCustom = styled(TableCell)((theme) => ({
  borderBottom: 'unset',
  fontFamily: 'yekan',
}));
const TableCellRow = styled(TableRow)((theme) => ({
  height: 20,
}));

export default function TableHeaderExperiment() {
  return (
    <TableHead>
      <TableCellRow>
        <TableCellCustom align="right">مشخصات شما</TableCellCustom>
        <TableCellCustom align="center">نوع آزمایش</TableCellCustom>
        <TableCellCustom align="center">زمان</TableCellCustom>
        <TableCellCustom align="center">مبلغ</TableCellCustom>
        <TableCellCustom align="left">وضعیت</TableCellCustom>
      </TableCellRow>
    </TableHead>
  );
}
