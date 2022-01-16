import React from 'react';
import usePagination from '@mui/material/usePagination';
import { makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    fontFamily: 'yekan',
  },
});

export default function UsePagination() {
  const classes = useStyles();
  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <IconButton
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                  backgroundColor: selected ? '#25a4ce' : 'white',
                  color: selected ? '#fff' : '#212121',
                  width: 30,
                  height: 30,
                  fontSize: 15,
                  borderRadius: 5,
                  fontFamily: 'yekan',
                }}
                {...item}
              >
                {page}
              </IconButton>
            );
          } else {
            children = (
              <IconButton {...item}>
                {type === 'previous' ? <ChevronRight /> : <ChevronLeft />}
              </IconButton>
            );
          }
          return (
            <li key={index} style={{ margin: 'auto 0' }}>
              {children}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
