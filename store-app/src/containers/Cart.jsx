import styled from 'styled-components';

import OrderItems from '../components/OrderItems';
import CartSummary from '../components/CartSummary';
import SectionWrapper from '../components/SectionWrapper';

const StyledCart = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Cart = ({ cart, changeQtyHandler }) => {
  return (
    <SectionWrapper>
      <StyledCart>
        {cart.items.length === 0 && <span>Your cart is empty</span>}
        {cart.items.length > 0 && (
          <>
            <OrderItems 
              items={cart.items} 
              edit={true} 
              changeQtyHandler={changeQtyHandler} />
            <CartSummary total={cart.total} />
          </>
        )}
      </StyledCart>
    </SectionWrapper>
  );
}

export default Cart;
