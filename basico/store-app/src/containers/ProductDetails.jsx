import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import Picture from '../components/Picture';
import SectionWrapper from '../components/SectionWrapper';
import Title from '../components/Title';

import CartContext from '../store/contexts/cart';
import ProductContext from '../store/contexts/product';

const Wrapper = styled.div`
  @media (min-width: 576px) {
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 1rem; 
    grid-template-areas: 
      'product-details-picture product-details-details';

    & > img {
      grid-area: product-details-picture;
    }

    & > div {
      grid-area: product-details-details;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-areas: 
      'product-details-picture product-details-picture product-details-details';
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductDetails = () => {
  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductContext);

  const params = useParams();
  const productId = +params.id;
  const product = productCtx.products.find(p => p.id === productId);

  return (
    <SectionWrapper>
      <Wrapper>
        <Picture src={product.picture} />
        <Details>
          <Title>{product.name}</Title>
          <span>$ {Number(product.price).toFixed(2)}</span>
          <p>{product.description}</p>
          <Button 
            variant="primary"
            onClick={() => cartCtx.addItemHandler(product)}>Buy</Button>
        </Details>
      </Wrapper>
    </SectionWrapper>
  );
}

export default ProductDetails;
