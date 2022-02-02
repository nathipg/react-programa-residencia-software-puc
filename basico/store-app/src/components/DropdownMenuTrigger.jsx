import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Icon = styled.div`
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  border-top: 2px solid white;
  border-left: 2px solid white;
  transform: rotate(225deg);
`;

const DropdownMenuTrigger = ({children, clickHandler}) => {
  return (
    <Wrapper onClick={clickHandler}>
      {children}
      <Icon />
    </Wrapper>
  );
}

export default DropdownMenuTrigger;
