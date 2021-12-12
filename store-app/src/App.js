import { useCallback, useEffect, useReducer, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Loading from './components/Loading';
import SectionWrapper from './components/SectionWrapper';
import AddProduct from './containers/AddProduct';
import Cart from './containers/Cart';
import CreateAccount from './containers/CreateAccount';
import Login from './containers/Login';
import OrderDetails from './containers/OrderDetails';
import Orders from './containers/Orders';
import ProductDetails from './containers/ProductDetails';
import Products from './containers/Products';

import { userReducer, userReducerActions } from './reducers/user';
import { productReducer, productReducerActions } from './reducers/product';
import { cartReducer, cartReducerActions } from './reducers/cart';
import { orderReducer, orderReducerActions } from './reducers/order';

const App = () => {
  const cartInitialState = {
    total: 0,
    items: [],
  };
  const [products, dispatchProducts] = useReducer(productReducer, []);
  const [users, dispatchUsers] = useReducer(userReducer, []);
  const [orders, dispatchOrders] = useReducer(orderReducer, []);
  const [cart, dispatchCart] = useReducer(cartReducer, cartInitialState);
  const navigate = useNavigate();
  const [loading, setLoading] = useState({
    complete: false,
    error: false,
  });
  const loggedUserId = 2; // Demo data
  const loggedUserOrders = orders.filter(o => o.userId === loggedUserId);

  const addUserHandler = async user => {
    const response = await axios.post('http://localhost:3001/user', user);
    
    if(response.status !== 200) {
      // Tratar erro
      return;
    }

    dispatchUsers({
      type: userReducerActions.ADD,
      user: response.data,
    });

    navigate('/login');
  };

  const addProductHandler = async product => {
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

  const addCartItemHandler = product => {
    dispatchCart({
      type: cartReducerActions.ADD,
      product,
    });

    navigate('/cart');
  };

  const changeQtyHandler = (event, product) => {
    dispatchCart({
      type: cartReducerActions.CHANGE_QTY,
      product,
      newValue: event.target.value,
    });
  };

  const addOrderHandler = async (event, cart) => {
    const response = await axios.post('http://localhost:3001/order', {
      ...cart,
      userId: loggedUserId,
    });
    
    if(response.status !== 200) {
      // Tratar erro
      return;
    }

    dispatchOrders({
      type: orderReducerActions.ADD,
      order: response.data,
    });

    dispatchCart({
      type: cartReducerActions.RESET,
      cart: cartInitialState,
    });

    navigate(`/order-details/${response.data.id}`);
  };

  const loadUsers = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3001/user');

      if(response.status !== 200) {
        setLoading(prevState => ({
          ...prevState,
          error: true,
        }));
        return;
      }

      dispatchUsers({
        type: userReducerActions.LOAD,
        users: response.data,
      });
    } catch(error) {
      setLoading(prevState => ({
        ...prevState,
        error: true,
      }));
    }
  }, [dispatchUsers]);

  const loadProducts = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3001/product');

      if(response.status !== 200) {
        setLoading(prevState => ({
          ...prevState,
          error: true,
        }));
        return;
      }

      dispatchProducts({
        type: productReducerActions.LOAD,
        products: response.data,
      });
    } catch(error) {
      setLoading(prevState => ({
        ...prevState,
        error: true,
      }));
    }
  }, [dispatchProducts]);

  const loadOrders = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3001/order');

      if(response.status !== 200) {
        setLoading(prevState => ({
          ...prevState,
          error: true,
        }));
        return;
      }

      dispatchOrders({
        type: orderReducerActions.LOAD,
        orders: response.data,
      });
    } catch(error) {
      setLoading(prevState => ({
        ...prevState,
        error: true,
      }));
    }
  }, [dispatchOrders]);

  useEffect(() => {
    (async () => {
      await loadUsers();
      await loadProducts();
      await loadOrders();

      setLoading(prevState => ({
        ...prevState,
        complete: true,
      }));
    })();
  }, [loadUsers, loadProducts, loadOrders]);

  return (
    <>
      <Header />

      {!loading.complete && <Loading /> }

      {loading.complete && loading.error && (
        <SectionWrapper>
          <span>Something went wrong :(</span>
        </SectionWrapper>
      )}

      {loading.complete && !loading.error && (
        <Routes>
          <Route path="/" exact element={<Products products={products} addCartItemHandler={addCartItemHandler} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount users={users} addUserHandler={addUserHandler} />} />
          <Route path="/cart" element={<Cart cart={cart} changeQtyHandler={changeQtyHandler} addOrderHandler={addOrderHandler} />} />
          <Route path="/all-orders" element={<Orders orders={orders} />} />
          <Route path="/my-orders" element={<Orders orders={loggedUserOrders} />} />
          <Route path="/order-details/:id" element={<OrderDetails orders={orders} />} />
          <Route path="/product-details/:id" element={<ProductDetails products={products} addCartItemHandler={addCartItemHandler} />} />
          <Route path="/add-product" element={<AddProduct addProductHandler={addProductHandler} />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
