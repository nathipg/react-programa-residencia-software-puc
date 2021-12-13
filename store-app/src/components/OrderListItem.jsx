import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Box from './Box';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  button {
    align-self: center;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
`;

const Details = styled.div`
  .id {
    font-weight: 700;
  }

  div {
    span {
      font-size: 0.8rem;

      &:first-of-type {
        margin-right: 1rem;
      }
    }
  }
`;

const OrdersListItem = ({ order, showButton = true }) => {
  const navigate = useNavigate();

  return (
    <Box variant="secondary">
      <Wrapper>
        <Details>
          <span className="id">#{order.id}</span>
          <div>
            <span>Date: {order.date}</span>
            <span>Total: $ {Number(order.total).toFixed(2)}</span>
          </div>
        </Details>
        {showButton && <Button variant="primary" onClick={() => navigate(`/order-details/${order.id}`)}>Details</Button>}
      </Wrapper>
    </Box>
  );
}

export default OrdersListItem;
