import Container from '../Container/index.jsx';
import { NavHeader, NavRow, NavLinkItem, Logout } from './style.js';
import useAuth from '../../context/AuthContext/useAuth.js';
import { privateLinks, publicLinks } from './links';
import AUTH_STATUS from '../../constants/auth';
import { TOKEN } from '../../constants/localStorage.js';
import useLocalStorage from '../../context/LocalStarageContext/useLocalStorage.js';

const Header = () => {
  const isAuthed = useAuth() === AUTH_STATUS.authed;
  const navLinks = isAuthed ? privateLinks : publicLinks;

  const { removeStorageItem } = useLocalStorage();

  const handleLogout = () => {
    removeStorageItem(TOKEN);
  };

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
            {isAuthed && <Logout onClick={handleLogout}>Logout</Logout>}
          </nav>
        </NavRow>
      </Container>
    </NavHeader>
  );
};

export default Header;
