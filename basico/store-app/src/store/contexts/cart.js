import { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { cartReducer, cartReducerActions } from '../reducers/cart';

const initialState = {
  total: 0,
  items: [],
};

const CartContext = createContext({
  cart: initialState,
  addItemHandler: product => {},
  changeQtyHandler: (event, product) => {},
  resetHandler: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, initialState);
  const navigate = useNavigate();

  const addItemHandler = product => {
    dispatchCart({
      type: cartReducerActions.ADD,
      product,
    });

    navigate('/cart');
  };

  const changeQtyHandler = (newValue, product) => {
    dispatchCart({
      type: cartReducerActions.CHANGE_QTY,
      product,
      newValue,
    });
  };

  const resetHandler = () => {
    dispatchCart({
      type: cartReducerActions.RESET,
      cart: initialState,
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItemHandler, changeQtyHandler, resetHandler }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContext;
