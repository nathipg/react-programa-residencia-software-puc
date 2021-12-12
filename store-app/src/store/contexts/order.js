import axios from 'axios';
import { createContext, useCallback, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { orderReducer, orderReducerActions } from '../reducers/order';

import AuthContext from './auth';
import CartContext from './cart';

const OrderContext = createContext({
  orders: [],
  addHandler: (event, cart) => {},
  loadOrders: () => {},
});

export const OrderContextProvider = ({ children }) => {
  const [orders, dispatchOrders] = useReducer(orderReducer, []);
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const addHandler = async (event, cart) => {
    const response = await axios.post('http://localhost:3001/order', {
      ...cart,
      userId: authCtx.loggedUser.id,
    });
    
    if(response.status !== 200) {
      // Tratar erro
      return;
    }

    dispatchOrders({
      type: orderReducerActions.ADD,
      order: response.data,
    });

    cartCtx.resetHandler();

    navigate(`/order-details/${response.data.id}`);
  };

  const loadOrders = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/order');

    if(response.status !== 200) {
      throw Error('Could not load orders');
    }

    dispatchOrders({
      type: orderReducerActions.LOAD,
      orders: response.data,
    });
  }, [dispatchOrders]);

  return (
    <OrderContext.Provider value={{ orders, addHandler, loadOrders }}>
      {children}
    </OrderContext.Provider>
  )
};

export default OrderContext;
