import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';
import Picture from './Picture';

import CartContext from '../store/contexts/cart';

const Wrapper = styled.div`
  padding: 0.5rem;
  min-width: 14rem;
  max-width: 14rem;
  box-sizing: border-box;
  cursor: pointer;
`;

const PictureWrapper = styled.div`
  background-color: white;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  height: 13rem;
  overflow: hidden;
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

const Product = ({ product }) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  const clickWrapperHandler = event => {
    if(event.target.tagName !== 'BUTTON') {
      navigate(`/product-details/${product.id}`)
    }
  };

  return (
    <Wrapper onClick={clickWrapperHandler}>
      <PictureWrapper>
        <Picture src={product.picture} width="stretch" height="13rem" />
      </PictureWrapper>
      <Details>
        <span>{product.name}</span>
        <Button variant="primary" size="sm" onClick={() => cartCtx.addItemHandler(product)}>Buy</Button>
      </Details>
    </Wrapper>
  );
}

export default Product;
