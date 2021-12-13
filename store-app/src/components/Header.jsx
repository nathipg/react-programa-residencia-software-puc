import { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import DropdownMenu from './DropdownMenu';
import DropdownMenuOptions from './DropdownMenuOptions';
import DropdownMenuTrigger from './DropdownMenuTrigger';
import Logo from './Logo';
import UserIcon from './UserIcon';
import AuthContext from '../store/contexts/auth';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem var(--margin-horizontal);
  background-color: var(--primary);
`;

const Options = styled.div``;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const clickLogoHandler = () => {
    if(ctx.isLoggedIn) {
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <StyledHeader>
      <Logo clickHandler={clickLogoHandler} />
      <Options>
        {ctx.isLoggedIn && (
          <>
            <DropdownMenuTrigger clickHandler={toggleMenu}>
              <UserIcon name={ctx.loggedUser.name} />
            </DropdownMenuTrigger>
            <DropdownMenu show={showMenu} closeHandler={toggleMenu}>
              <DropdownMenuOptions to="/">Products</DropdownMenuOptions>
              <DropdownMenuOptions to="/cart">Cart</DropdownMenuOptions>
              <DropdownMenuOptions to="/my-orders">My Orders</DropdownMenuOptions>
              {ctx.loggedUser.admin === 1 && (
                <>
                  <DropdownMenuOptions to="/all-orders">All Orders</DropdownMenuOptions>
                  <DropdownMenuOptions to="/add-product">Add Products</DropdownMenuOptions>
                </>
              )}
              <DropdownMenuOptions as="span" onClick={ctx.logoutHandler}>Logout</DropdownMenuOptions>
            </DropdownMenu>
          </>
        )}
      </Options>
    </StyledHeader>
  );
}

export default Header;