import { useContext } from 'react';
import styled from 'styled-components';

import FlashMsgContext from '../store/contexts/flashMsg';

const Wrapper = styled.div`
  background-color: white;
  border-left: 6px solid var(--error);
  border-radius: 0.25rem;
  box-shadow: 5px 5px 15px 5px var(--gray);
  width: 17rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding-left: 1rem;
  margin: 1rem;
  position: absolute;
  right: 0;
  z-index: 100;
`;

const MsgWrapper = styled.div`
  padding: 0.5rem;

  h2 {
    margin: 0;
    font-size: 1rem;
  }

  span {
    font-size: 0.9rem;
  }
`;

const Options = styled.div`
  border-left: 1px solid var(--dark-gray);
  padding: 0.5rem 1rem;
  display: flex;
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: var(--dark-gray);
`;

const FlashMsg = ({ msg }) => {
  const flashMsgCtx = useContext(FlashMsgContext);

  return (
    <Wrapper>
      <MsgWrapper>
        <h2>Error</h2>
        <span>{flashMsgCtx.flashMsg.msg}</span>
      </MsgWrapper>
      <Options>
        <Button onClick={flashMsgCtx.hideHandler}>Close</Button>
      </Options>
    </Wrapper>
  );
}

export default FlashMsg;