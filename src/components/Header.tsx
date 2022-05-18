import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useStore } from 'effector-react';
import { $auth } from '../models/auth';

type Link = {
  label: string;
  to: string;
};

type Props = {
  links: Link[];
};
const Header: FC<Props> = ({ links }) => {
  const { isAuthenticated } = useStore($auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            {links.map(({ to, label }) => (
              <NavLink to={to} key={label}>
                <Button>{label}</Button>
              </NavLink>
            ))}
          </Box>
          {isAuthenticated && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Authorised
            </Typography>
          )}
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
