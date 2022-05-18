import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useStore } from 'effector-react';

import { $auth, logout } from '../models/auth';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

type Link = {
  label: string;
  to: string;
};

type Props = {
  links: Link[];
};
const Header: FC<Props> = ({ links }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useStore($auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Box sx={{ flexGrow: 1, my: 1, display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              App
            </Typography>
            {links.map(({ to, label }) => (
              <NavLink to={to} key={label}>
                <Button>{label}</Button>
              </NavLink>
            ))}
            {isAuthenticated && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" component="div">
                  Authorised
                </Typography>
                <IconButton
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                >
                  <LogoutIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
