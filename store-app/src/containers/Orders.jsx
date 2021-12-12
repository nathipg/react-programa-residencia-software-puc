import { useContext } from 'react';

import OrdersList from '../components/OrdersList';
import SectionWrapper from '../components/SectionWrapper';

import AuthContext from '../store/contexts/auth';
import OrderContext from '../store/contexts/order';

const Orders = () => {
  const authCtx = useContext(AuthContext);
  const orderCtx = useContext(OrderContext);

  let filteredOrders = orderCtx.orders;

  if(authCtx.isLoggedIn) {
    filteredOrders = orderCtx.orders.filter(o => o.userId === authCtx.loggedUser.id);
  }

  return (
    <SectionWrapper>
      <OrdersList orders={filteredOrders} />
    </SectionWrapper>
  );
}

export default Orders;
