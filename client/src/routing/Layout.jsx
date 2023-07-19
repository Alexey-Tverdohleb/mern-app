import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Container from '../components/Container';

const Layout = () => (
  <>
    <Header />
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  </>
);

export default Layout;
