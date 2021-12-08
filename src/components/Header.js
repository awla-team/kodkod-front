import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/images/avatar.png';
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from '@mui/material';

import {
  PersonAdd,
  Settings,
  Logout
} from '@mui/icons-material';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  padding: 8px 32px;
  backgrond: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(6px);
  align-items: center;
  justify-content: flex-end;
`;

const Header = ({}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <div>
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }} src={avatar} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar sx={{ width: 32, height: 32, marginRight: 1 }} src={avatar} /> Mi perfil
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Ajustes
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Cerrar sesión
          </MenuItem>
        </Menu>
      </div>
    </Container>
  );
};

export default Header;
