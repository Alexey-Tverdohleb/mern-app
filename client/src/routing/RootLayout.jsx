import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Container from '../components/Container';
import AuthProvider from '../context/AuthContext';

const RootLayout = () => (
  <AuthProvider>
    <Header />
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  </AuthProvider>
);

export default RootLayout;
