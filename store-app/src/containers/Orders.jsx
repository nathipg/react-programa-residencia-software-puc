import OrdersList from '../components/OrdersList';
import SectionWrapper from '../components/SectionWrapper';

const Orders = ({ orders }) => {
  return (
    <SectionWrapper>
      <OrdersList orders={orders} />
    </SectionWrapper>
  );
}

export default Orders;
