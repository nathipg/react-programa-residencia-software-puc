import { useContext } from 'react';
import styled from 'styled-components';

import OrderItems from '../components/OrderItems';
import CartSummary from '../components/CartSummary';
import SectionWrapper from '../components/SectionWrapper';

import CartContext from '../store/contexts/cart';

const StyledCart = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Cart = ({ addOrderHandler }) => {
  const cartCtx = useContext(CartContext);

  return (
    <SectionWrapper>
      <StyledCart>
        {cartCtx.cart.items.length === 0 && <span>Your cart is empty</span>}
        {cartCtx.cart.items.length > 0 && (
          <>
            <OrderItems 
              items={cartCtx.cart.items} 
              edit={true} />
            <CartSummary cart={cartCtx.cart} />
          </>
        )}
      </StyledCart>
    </SectionWrapper>
  );
}

export default Cart;
