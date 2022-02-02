import { useContext } from 'react';
import styled from 'styled-components';

import Box from './Box';
import Button from './Button';
import Title from './Title';

import OrderContext from '../store/contexts/order';

const Wrapper = styled.div``;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;

  .text {
    font-weight: 700;
  }

  .value {
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    gap: 5rem;
  }
`;

const TitleWrapper = styled.div`
  margin: 0 0 2px 1rem;
`;

const CartSummary = ({ cart }) => {
  const orderCtx = useContext(OrderContext);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title level="2">Summary</Title>
      </TitleWrapper>
      <Box variant="secondary">
        <DetailsWrapper>
          <Details>
            <span className="text">Total</span>
            <span className="value">$ {Number(cart.total).toFixed(2)}</span>
          </Details>
          <Button 
            variant="primary"
            onClick={event => orderCtx.addHandler(event, cart)}>Buy</Button>
        </DetailsWrapper>
      </Box>
    </Wrapper>
  );
}

export default CartSummary;
