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

const Cart = () => {
  const cart = {
    total: 150,
    items: [{
      product: {
        id: 1,
        name: 'Book',
        picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        price: 50,
      },
      qty: 2,
      total: 100,
    }, {
      product: {
        id: 2,
        name: 'Book',
        picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        price: 50,
      },
      qty: 1,
      total: 50,
    }]
  };

  return (
    <SectionWrapper>
      <StyledCart>
        <OrderItems items={cart.items} edit={true} />
        <CartSummary total={cart.total} />
      </StyledCart>
    </SectionWrapper>
  );
}

export default Cart;
