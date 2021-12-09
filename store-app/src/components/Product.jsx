import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  padding: 0.5rem;
  min-width: 14rem;
  max-width: 14rem;
  box-sizing: border-box;
  cursor: pointer;
`;

const PictureWrapper = styled.div`
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  min-height: 13rem;
  max-height: 13rem;
  overflow: hidden;
`;

const Picture = styled.img`
  width: stretch;
`;

const Details = styled.div`
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  background-color: white;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  
  span {
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  button {
    align-self: flex-end;
  }
`;

const Product = ({product}) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/product-details/${product.id}`)}>
      <PictureWrapper>
        <Picture src={product.picture} />
      </PictureWrapper>
      <Details>
        <span>{product.name}</span>
        <Button variant="primary" size="sm">Buy</Button>
      </Details>
    </Wrapper>
  );
}

export default Product;
