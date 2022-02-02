import { useContext } from 'react';

import OrdersList from '../components/OrdersList';
import SectionWrapper from '../components/SectionWrapper';

import OrderContext from '../store/contexts/order';

const Orders = ({ userId }) => {
  const orderCtx = useContext(OrderContext);

  let filteredOrders = orderCtx.orders;

  if(userId) {
    filteredOrders = orderCtx.orders.filter(o => o.userId === userId);
  }

  return (
    <SectionWrapper title={userId ? 'My Orders' : 'All Orders'}>
      <OrdersList orders={filteredOrders} />
    </SectionWrapper>
  );
}

export default Orders;
