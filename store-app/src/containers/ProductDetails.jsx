import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

import Picture from '../components/Picture';
import SectionWrapper from '../components/SectionWrapper';
import Title from '../components/Title';

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

const ProductDetails = ({ products }) => {
  const params = useParams();
  const productId = +params.id;
  const product = products.find(p => p.id === productId);

  return (
    <SectionWrapper>
      <Wrapper>
        <Picture src={product.picture} />
        <Details>
          <Title>{product.name}</Title>
          <span>$ {product.price}</span>
          <p>{product.description}</p>
          <Button variant="primary">Buy</Button>
        </Details>
      </Wrapper>
    </SectionWrapper>
  );
}

export default ProductDetails;
