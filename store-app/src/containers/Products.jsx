import Input from '../components/Input';
import InputsWrapper from '../components/InputsWrapper';
import ProductsList from '../components/ProductsList';
import SectionWrapper from '../components/SectionWrapper';

const Products = ({ products }) => {
  return (
    <SectionWrapper>
      <InputsWrapper>
        <Input
          label="Search products..."
          name="search"
          type="text"
          value=""
          onChange={() => {}} />
      </InputsWrapper>
      <ProductsList 
        products={products} />
    </SectionWrapper>
  );
}

export default Products;
