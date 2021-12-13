import { useContext, useState } from 'react';

import Input from '../components/Input';
import InputsWrapper from '../components/InputsWrapper';
import ProductsList from '../components/ProductsList';
import SectionWrapper from '../components/SectionWrapper';

import ProductContext from '../store/contexts/product';

const Products = () => {
  const productCtx = useContext(ProductContext);
  const [search, setSearch] = useState('');
  let filteredProducts = productCtx.products;

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  if(search !== '') {
    filteredProducts = productCtx.products.filter(p => p.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

  return (
    <SectionWrapper title="Products">
      <InputsWrapper>
        <Input
          label="Search products..."
          name="search"
          type="text"
          value={search}
          onChange={updateSearch} />
      </InputsWrapper>
      <ProductsList 
        products={filteredProducts} />
    </SectionWrapper>
  );
}

export default Products;
