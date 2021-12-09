import styled from 'styled-components';

import Box from './Box';
import Button from './Button';

const Wrapper = styled.div``;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1rem;
  margin: 0 0 2px 1rem;
`;

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

const CartSummary = ({total}) => {
  return (
    <Wrapper>
      <Title>Summary</Title>
      <Box variant="secondary">
        <DetailsWrapper>
          <Details>
            <span className="text">Total</span>
            <span className="value">$ {total}</span>
          </Details>
          <Button variant="primary">Buy</Button>
        </DetailsWrapper>
      </Box>
    </Wrapper>
  );
}

export default CartSummary;
