import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import DropdownMenu from './DropdownMenu';
import DropdownMenuOptions from './DropdownMenuOptions';
import DropdownMenuTrigger from './DropdownMenuTrigger';
import Logo from './Logo';
import UserIcon from './UserIcon';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem var(--margin-horizontal);
  background-color: var(--primary);
`;

const Options = styled.div``;

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <StyledHeader>
      <Logo clickHandler={() => navigate('/')} />
      <Options>
        <DropdownMenuTrigger clickHandler={toggleMenu}>
          <UserIcon name="Pissuti" />
        </DropdownMenuTrigger>
        <DropdownMenu show={showMenu} closeHandler={toggleMenu}>
          <DropdownMenuOptions to="/cart">Cart</DropdownMenuOptions>
          <DropdownMenuOptions to="/my-orders">My Orders</DropdownMenuOptions>
          <DropdownMenuOptions to="/all-orders">All Orders</DropdownMenuOptions>
          <DropdownMenuOptions to="/add-product">Add Products</DropdownMenuOptions>
          <DropdownMenuOptions to="/login">Logout</DropdownMenuOptions>
        </DropdownMenu>
      </Options>
    </StyledHeader>
  );
}

export default Header;