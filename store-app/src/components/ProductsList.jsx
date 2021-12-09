import styled from 'styled-components';
import Product from './Product';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductsList = ({products}) => {
  const renderProducts = () => {
    if(products.length === 0) {
      return <span>No products found</span>
    }

    return products.map(product => <Product key={product.id} product={product} />);
  };

  return (
    <Wrapper>
      {renderProducts()}
    </Wrapper>
  );
}

export default ProductsList;
