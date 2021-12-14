import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Box from './Box';
import Button from './Button';

import UserContext from '../store/contexts/user';

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

  .info {
    display: flex;
    flex-wrap: wrap;

    span {
      font-size: 0.8rem;
      margin-right: 1rem;
      white-space: nowrap;
    }
  }
`;

const OrdersListItem = ({ order, showButton = true }) => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const client = userCtx.users.find(u => u.id === order.userId);

  return (
    <Box variant="secondary">
      <Wrapper>
        <Details>
          <span className="id">#{order.id}</span>
          <div className="info">
            <span>Date: {order.date}</span>
            <span>Total: $ {Number(order.total).toFixed(2)}</span>
            <span>Client: {client.name} ({client.email})</span>
          </div>
        </Details>
        {showButton && <Button variant="primary" onClick={() => navigate(`/order-details/${order.id}`)}>Details</Button>}
      </Wrapper>
    </Box>
  );
}

export default OrdersListItem;
