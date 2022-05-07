import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { ExperimentButton, MenuList } from '../../molecules';
import logo from '../../../../assets/icons/Path 1305.svg';
import { useHistory, useRouteMatch } from 'react-router-dom';
import MobileModal from '../Information/ContentUploader/MobileModal';
// import MenuIcon from '@mui/icons-material/Menu';
import jsCookie from 'js-cookie';
import { MdOutlineLogout, MdOutlinePhone } from 'react-icons/md';
import { current } from '@reduxjs/toolkit';
export default function NavbarHeader() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  let isAuth = jsCookie.get('loginToken');
  const currentPath = window.location.href;
  function logout() {
    jsCookie.set('loginToken', '');
    jsCookie.remove('userId');
    window.open(currentPath, '_self');
  }

  const [pay, setPay] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: 'linear-gradient(to left, #2599bd ,#28c3fb) ' }}
      >
        <Container maxWidth="lg" style={{ padding: 0 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => history.push('/dashboard')}
              sx={{ mr: 2 }}
            >
              <img src={logo} />
            </IconButton>
            &nbsp;&nbsp;&nbsp;
            <MenuList open={open} setOpen={setOpen} />
            <Box style={{ flexGrow: 1 }} className="menu-resp"></Box>
            {!isAuth ? (
              <ExperimentButton
                background={
                  'linear-gradient(90deg, rgb(223, 93, 93) 0%, rgb(252, 89, 69) 10%)'
                }
                color="#fff"
                title="ورود یا ثبت نام"
                onClick={() => setPay(true)}
                icon={
                  <AiOutlineUser
                    style={{ fontSize: '24px', cursor: 'pointer' }}
                    color="#fff"
                  />
                }
              />
            ) : (
              <ExperimentButton
                color="#fff"
                background={
                  'linear-gradient(90deg, rgb(223, 93, 93) 0%, rgb(252, 89, 69) 10%)'
                }
                title="خروج"
                onClick={() => logout()}
                icon={
                  <MdOutlineLogout
                    color="#fff"
                    style={{ fontSize: '24px', cursor: 'pointer' }}
                  />
                }
              />
            )}
            &nbsp;&nbsp;&nbsp;
            {!isAuth ? (
              <ExperimentButton color="#fff" fontSize={15} onClick={() => {
                window.open('tel:02191090495', '_self')
              }} title='021-91090495' icon={
                <MdOutlinePhone
                  color="#fff"
                  style={{ fontSize: '22px', cursor: 'pointer' }}
                />}
              />

            ) : (
              <ExperimentButton />
            )}

            {/* <AiOutlineMenu
                            onClick={() => setOpen(true)}
                            className="menu-resp"
                            style={{fontSize: 45, marginRight: 15}}
                        />*/}
          </Toolbar>
        </Container>
      </AppBar>

      <MobileModal type={'justLogin'} setPay={setPay} pay={pay} />
    </Box>
  );
}
