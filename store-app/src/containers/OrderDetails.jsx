import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import OrderItems from '../components/OrderItems';
import OrdersListItem from '../components/OrderListItem';
import SectionWrapper from '../components/SectionWrapper';

import OrderContext from '../store/contexts/order';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const OrderDetails = () => {
  const orderCtx = useContext(OrderContext);
  const params = useParams();
  const orderId = +params.id;
  const order = orderCtx.orders.find(o => o.id === orderId);

  return (
    <SectionWrapper>
      <Wrapper>
        <OrdersListItem order={order} showButton={false} />
        <OrderItems items={order.products} />
      </Wrapper>
    </SectionWrapper>
  );
}

export default OrderDetails;
