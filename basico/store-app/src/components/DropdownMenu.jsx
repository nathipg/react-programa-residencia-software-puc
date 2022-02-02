import styled from "styled-components";

import Backdrop from "./Backdrop";

const StyledDropdownMenu = styled.div`
  display: ${({show}) => show ? 'flex' : 'none'};
  align-items: center;
  cursor: pointer;
  padding: 0;
  z-index: 200;
  position: absolute;

  flex-direction: column;
  right: var(--margin-horizontal);
  position: absolute;
  background-color: white;
  border: 1px solid var(--gray);
  box-shadow: 0px 0px 5px var(--gray);
  padding: 0.75rem 0;
  margin-top: 0.25rem;
`;

const DropdownMenu = ({children, show, closeHandler}) => {
  return (
    <>
      <Backdrop 
        show={show} 
        clickHandler={closeHandler} 
        bgColor="transparent" />
      <StyledDropdownMenu
        show={show}
        onClick={closeHandler}>
        {children}
      </StyledDropdownMenu>
    </>
  );
}

export default DropdownMenu;
