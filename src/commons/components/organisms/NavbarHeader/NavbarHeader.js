import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { ExperimentButton, MenuList } from '../../molecules';
import logo from '../../../../assets/icons/Path 1305.svg';
import { useHistory } from 'react-router-dom';
import MobileModal from '../Information/ContentUploader/MobileModal';
// import MenuIcon from '@mui/icons-material/Menu';
import jsCookie from 'js-cookie';
export default function NavbarHeader() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  let isAuth = jsCookie.get('loginToken');

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
            {!isAuth && (
              <AiOutlineUser
                onClick={() => setPay(true)}
                style={{ fontSize: '28px', cursor: 'pointer' }}
              />
            )}
            &nbsp;&nbsp;&nbsp;
            <ExperimentButton />
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
