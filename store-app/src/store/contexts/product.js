import axios from 'axios';
import { createContext, useCallback, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { productReducer, productReducerActions } from '../reducers/product';

import FlashMsgContext from './flashMsg';

const ProductContext = createContext({
  products: [],
  addHandler: product => {},
  loadProducts: () => {},
});

export const ProductContextProvider = ({ children }) => {
  const [products, dispatchProducts] = useReducer(productReducer, []);
  const flashMsgCtx = useContext(FlashMsgContext);
  const navigate = useNavigate();

  const addHandler = async product => {
    try {
      const response = await axios.post('http://localhost:3001/product', product);
      
      if(response.status !== 200) {
        throw Error(response);
      }

      dispatchProducts({
        type: productReducerActions.ADD,
        product: response.data,
      });

      navigate('/');
    } catch(e) {
      console.error(e);
      flashMsgCtx.showHandler('Error creating product');
    }
  };

  const loadProducts = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/product');

    if(response.status !== 200) {
      throw Error('Could not load products');
    }

    dispatchProducts({
      type: productReducerActions.LOAD,
      products: response.data,
    });
  }, [dispatchProducts]);

  return (
    <ProductContext.Provider value={{ products, addHandler, loadProducts }}>
      {children}
    </ProductContext.Provider>
  )
};

export default ProductContext;
