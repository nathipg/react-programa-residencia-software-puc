import { useReducer } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Input from '../components/Input';
import InputsWrapper from '../components/InputsWrapper';
import SectionWrapper from '../components/SectionWrapper';

import { productFormReducer, productFormReducerActions } from '../reducers/product';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddProduct = ({ addProductHandler }) => {
  const formInitialState = {
    isValid: false,
    fields: {
      name: {
        type: 'text',
        label: 'Name',
        value: '',
        validation: [{
          rule: 'required',
          msg: 'Please, type a name',
        }],
        valid: false,
        errorMsg: '',
        touched: false,
      },
      price: {
        type: 'text',
        label: 'Price',
        value: '',
        accept: 'currency',
        validation: [{
          rule: 'required',
          msg: 'Please, type a price',
        }],
        valid: false,
        errorMsg: '',
        touched: false,
      },
      picture: {
        type: 'url',
        label: 'Picture',
        value: '',
        validation: [{
            rule: 'required',
            msg: 'Please, type a picture URL',
          }, {
            rule: 'url',
            msg: 'Please, type a valid picture URL',
          },
        ],
        valid: false,
        errorMsg: '',
        touched: false,
      },
      description: {
        as: 'textarea',
        label: 'Description',
        value: '',
        validation: [{
          rule: 'required',
          msg: 'Please, type a description',
        }],
        valid: false,
        errorMsg: '',
        touched: false,
      },
    },
  };
  const [formState, dispatch] = useReducer(productFormReducer, formInitialState);
  const inputArray = [];

  for(const key in formState.fields) {
    inputArray.push({
      name: key,
      ...formState.fields[key]
    });
  }

  const inputChangeHandler = event => {
    dispatch({
      type: productFormReducerActions.USER_INPUT,
      field: event.target.name,
      value: event.target.value,
    });
  };

  const inputBlurHandler = event => {
    dispatch({
      type: productFormReducerActions.BLUR_INPUT,
      field: event.target.name,
    });
  };

  const inputFocusHandler = event => {
    dispatch({
      type: productFormReducerActions.FOCUS_INPUT,
      field: event.target.name,
    });
  };

  const submitHandler = event => {
    event.preventDefault();

    if(!formState.isValid) {
      return;
    }

    const product = {};

    for(const key in formState.fields) {
      product[key] = formState.fields[key].value;
    }

    addProductHandler(product);
  };

  return (
    <SectionWrapper>
      <form onSubmit={submitHandler}>
        <Wrapper>
          <InputsWrapper>
            {inputArray.map(input => (
              <Input
                key={input.name}
                name={input.name}
                label={input.label}
                as={input.as}
                type={input.type}
                value={input.value}
                touched={input.touched}
                valid={input.valid}
                invalidMessage={input.errorMsg}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                onFocus={inputFocusHandler} />
            ))}
          </InputsWrapper>
          <Button
            variant="primary"
            disabled={!formState.isValid}>Add</Button>
        </Wrapper>
      </form>
    </SectionWrapper>
  );
}

export default AddProduct;
