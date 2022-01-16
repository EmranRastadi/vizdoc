import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container, Grid } from '@mui/material';
import { Label } from '../../atoms';
import { AiOutlineMenu } from 'react-icons/ai';
import { ExperimentButton, MenuList } from '../../molecules';
// import MenuIcon from '@mui/icons-material/Menu';

export default function NavbarHeader() {
  const [open, setOpen] = React.useState(false);
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
              sx={{ mr: 2 }}
            >
              <img src="/icons/Path 1305.svg" />
            </IconButton>
            &nbsp;&nbsp;&nbsp;
            <MenuList open={open} setOpen={setOpen} />
            <Box style={{ flexGrow: 1 }} className="menu-resp"></Box>
            <ExperimentButton />
            <AiOutlineMenu
              onClick={() => setOpen(true)}
              className="menu-resp"
              style={{ fontSize: 45, marginRight: 15 }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
