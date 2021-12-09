import Input from '../components/Input';
import ProductsList from '../components/ProductsList';
import SectionWrapper from '../components/SectionWrapper';

const Products = ({ products }) => {
  return (
    <SectionWrapper>
      <Input
          label="Search products..."
          name="search"
          type="text"
          value=""
          onChange={() => {}} />
      <ProductsList 
        products={products} />
    </SectionWrapper>
  );
}

export default Products;
