import styled from 'styled-components';

import OrdersListItem from './OrderListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OrdersList = ({ orders }) => {
  const renderOrders = () => {
    if(orders.length === 0) {
      return <span>No orders found</span>;
    }

    return orders.map(order => <OrdersListItem key={order.id} order={order} />);
  };

  return (
    <Wrapper>
      {renderOrders()}
    </Wrapper>
  );
}

export default OrdersList;
