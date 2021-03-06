import { useContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import FlashMsg from './components/FlashMsg';
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

import AuthContext from './store/contexts/auth';
import FlashMsgContext from './store/contexts/flashMsg';
import OrderContext from './store/contexts/order';
import ProductContext from './store/contexts/product';
import UserContext from './store/contexts/user';

const App = () => {
  const [loading, setLoading] = useState({
    complete: false,
    error: false,
  });

  const { flashMsg } = useContext(FlashMsgContext);
  const { isLoggedIn, loggedUser } = useContext(AuthContext);
  const { loadOrders } = useContext(OrderContext);
  const { loadProducts } = useContext(ProductContext);
  const { loadUsers } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        await loadUsers();
        await loadProducts();
        await loadOrders();

        setLoading(prevState => ({
          ...prevState,
          complete: true,
        }));
      } catch(e) {
        console.error(e);
        setLoading(prevState => ({
          ...prevState,
          complete: true,
          error: true,
        }));
      }
    })();
  }, [loadUsers, loadProducts, loadOrders]);

  return (
    <>
      <Header />

      {flashMsg.isVisible && <FlashMsg /> }

      {!loading.complete && <Loading /> }

      {loading.complete && loading.error && (
        <SectionWrapper>
          <span>Something went wrong :(</span>
        </SectionWrapper>
      )}

      {loading.complete && !loading.error && (
        <Routes>
          {!isLoggedIn && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />
            </>
          )}

          {isLoggedIn && (
            <>
              <Route path="/" exact element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/all-orders" element={<Orders />} />
              <Route path="/my-orders" element={<Orders userId={loggedUser.id} />} />
              <Route path="/order-details/:id" element={<OrderDetails />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/add-product" element={<AddProduct />} />
            </>
          )}

          <Route path="*" element={<Navigate replace to={isLoggedIn ? '/' : '/login'} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
