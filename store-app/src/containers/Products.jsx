import { useState } from 'react';
import Input from '../components/Input';
import InputsWrapper from '../components/InputsWrapper';
import ProductsList from '../components/ProductsList';
import SectionWrapper from '../components/SectionWrapper';

const Products = ({ products, addCartItemHandler }) => {
  const [search, setSearch] = useState('');
  let filteredProducts = products;

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  if(search !== '') {
    filteredProducts = products.filter(p => p.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

  return (
    <SectionWrapper>
      <InputsWrapper>
        <Input
          label="Search products..."
          name="search"
          type="text"
          value={search}
          onChange={updateSearch} />
      </InputsWrapper>
      <ProductsList 
        products={filteredProducts}
        addCartItemHandler={addCartItemHandler} />
    </SectionWrapper>
  );
}

export default Products;
