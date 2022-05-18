import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Container from '@mui/material/Container';

const Layout: FC = () => {
  return (
    <div>
      <Header links={[]} />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
