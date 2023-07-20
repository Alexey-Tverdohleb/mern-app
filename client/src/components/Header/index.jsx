import Container from '../Container/index.jsx';
import { NavHeader, NavRow, NavLinkItem } from './style.js';
import useAuth from '../../context/AuthContext/useAuth.js';
import { privateLinks, publicLinks } from './links';
import AUTH_STATUS from '../../constants/auth';

const Header = () => {
  const authStatus = useAuth();
  const navLinks = authStatus === AUTH_STATUS.authed ? privateLinks : publicLinks;

  return (
    <NavHeader>
      <Container>
        <NavRow>
          <h2>MERN</h2>
          <nav>
            {navLinks.map(({ path, label }) => (
              <NavLinkItem key={path} to={path}>
                {label}
              </NavLinkItem>
            ))}
          </nav>
        </NavRow>
      </Container>
    </NavHeader>
  );
};

export default Header;
