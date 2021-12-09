import styled from 'styled-components';

import Input from '../components/Input';
import ProductsList from '../components/ProductsList';

const Wrapper = styled.div`
  padding: var(--margin-top-section) var(--margin-horizontal);
`;

const Products = () => {
  return (
    <Wrapper>
      <Input
          label="Search products..."
          name="search"
          type="text"
          value=""
          onChange={() => {}} />
      <ProductsList 
        products={[{
          id: 1,
          name: 'Book',
          picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        }, {
          id: 2,
          name: 'Book',
          picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        }, {
          id: 3,
          name: 'Book',
          picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        }, {
          id: 4,
          name: 'Book',
          picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        }, {
          id: 5,
          name: 'Book',
          picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        }, {
          id: 6,
          name: 'Book',
          picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        }]} />
    </Wrapper>
  );
}

export default Products;
