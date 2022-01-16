import { Typography } from '@mui/material';
export default function Label(props) {
  return (
    <Typography
      style={{
        fontFamily: 'yekan !important',
        fontWeight: 'bolder',
        fontSize: '20px',
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
}
