import styled from 'styled-components';

import Button from '../components/Button';
import Input from '../components/Input';
import InputsWrapper from '../components/InputsWrapper';
import SectionWrapper from '../components/SectionWrapper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddProduct = () => {
  return (
    <SectionWrapper>
      <Wrapper>
        <InputsWrapper>
          <Input
            label="Name"
            name="name"
            type="text"
            value=""
            onChange={() => {}} />
          <Input
            label="Price"
            name="price"
            type="text"
            value=""
            onChange={() => {}} />
          <Input
            label="Picture URL"
            name="picture"
            type="text"
            value=""
            onChange={() => {}} />
          <Input
            label="Description"
            name="description"
            as="textarea"
            value=""
            onChange={() => {}} />
        </InputsWrapper>
        <Button
          variant="primary">Add</Button>
      </Wrapper>
    </SectionWrapper>
  );
}

export default AddProduct;
