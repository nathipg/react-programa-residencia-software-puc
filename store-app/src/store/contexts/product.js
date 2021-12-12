import axios from 'axios';
import { createContext, useCallback, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { productReducer, productReducerActions } from '../reducers/product';

const ProductContext = createContext({
  products: [],
  addHandler: product => {},
  loadProducts: () => {},
});

export const ProductContextProvider = ({ children }) => {
  const [products, dispatchProducts] = useReducer(productReducer, []);
  const navigate = useNavigate();

  const addHandler = async product => {
    const response = await axios.post('http://localhost:3001/product', product);
    
    if(response.status !== 200) {
      // Tratar erro
      return;
    }

    dispatchProducts({
      type: productReducerActions.ADD,
      product: response.data,
    });

    navigate('/');
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
