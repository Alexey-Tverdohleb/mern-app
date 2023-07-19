import Container from '../Container/index.jsx';
import { NavHeader, NavRow, NavLinkItem } from './style.js';

const Header = () => {
  return (
    <NavHeader>
      <Container>
        <NavRow>
          <h2>MERN</h2>
          <nav>
            <NavLinkItem to="/">Home</NavLinkItem>
            <NavLinkItem to="login">Login</NavLinkItem>
            <NavLinkItem to="registration">Registration</NavLinkItem>
          </nav>
        </NavRow>
      </Container>
    </NavHeader>
  );
};

export default Header;
