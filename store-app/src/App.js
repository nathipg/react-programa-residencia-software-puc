import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Cart from './containers/Cart';
import CreateAccount from './containers/CreateAccount';
import Login from './containers/Login';
import OrderDetails from './containers/OrderDetails';
import Orders from './containers/Orders';
import ProductDetails from './containers/ProductDetails';
import Products from './containers/Products';

const App = () => {
  // Demo data
  const orders = [{
    id: 1,
    date: '2021/12/03',
    total: 150,
    items: [{
      product: {
        id: 1,
        name: 'Book',
        picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        price: 50,
      },
      qty: 2,
      total: 100,
    }, {
      product: {
        id: 2,
        name: 'Book',
        picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        price: 50,
      },
      qty: 1,
      total: 50,
    }],
  }, {
    id: 2,
    date: '2021/12/03',
    total: 150,
    items: [{
      product: {
        id: 1,
        name: 'Book',
        picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        price: 50,
      },
      qty: 2,
      total: 100,
    }, {
      product: {
        id: 2,
        name: 'Book',
        picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        price: 50,
      },
      qty: 1,
      total: 50,
    }],
  }, {
    id: 3,
    date: '2021/12/03',
    total: 150,
    items: [{
      product: {
        id: 1,
        name: 'Book',
        picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        price: 50,
      },
      qty: 2,
      total: 100,
    }, {
      product: {
        id: 2,
        name: 'Book',
        picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
        price: 50,
      },
      qty: 1,
      total: 50,
    }],
  }];

  const products = [{
      id: 1,
      name: 'Book',
      picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
    }, {
      id: 2,
      name: 'Book',
      picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
    }, {
      id: 3,
      name: 'Book',
      picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
    }, {
      id: 4,
      name: 'Book',
      picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
    }, {
      id: 5,
      name: 'Book',
      picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
    }, {
      id: 6,
      name: 'Book',
      picture: 'https://img.elo7.com.br/product/original/377F9D5/caderno-old-book-mandala-preto.jpg',
    }];

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Products products={products} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/all-orders" element={<Orders orders={orders} />} />
        <Route path="/my-orders" element={<Orders orders={orders} />} />
        <Route path="/order-details/:id" element={<OrderDetails orders={orders} />} />
        <Route path="/product-details/:id" element={<ProductDetails products={products} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
