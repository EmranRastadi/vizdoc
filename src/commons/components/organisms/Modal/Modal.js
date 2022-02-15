import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Grid, TextField } from '@mui/material';
import { Label } from '../../atoms';
import { CheckBoxButton } from '../../molecules';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 5,
  p: 1,
  paddingBottom: 5,
};

export default function TransitionsModal(props) {
  const { status, setStatus, title } = props;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setStatus(false);
  };

  useEffect(() => {
    setOpen(status);
  }, [status]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Container>
              <Grid container spacing={'3'}>
                <Grid
                  item
                  xs="12"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    columnGap: 10,
                    margin: '15px 0',
                  }}
                >
                  <AiOutlineClose
                    size={'25px'}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClose()}
                  />
                  <Label>{title}</Label>
                </Grid>
                {props.children}
              </Grid>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
