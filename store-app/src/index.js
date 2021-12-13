import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ComposeContext from './components/ComposeContext';

import { AuthContextProvider } from './store/contexts/auth';
import { CartContextProvider } from './store/contexts/cart';
import { FlashMsgContextProvider } from './store/contexts/flashMsg';
import { OrderContextProvider } from './store/contexts/order';
import { ProductContextProvider } from './store/contexts/product';
import { UserContextProvider } from './store/contexts/user';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <ComposeContext contextProviders={[
      FlashMsgContextProvider, AuthContextProvider, CartContextProvider, OrderContextProvider, ProductContextProvider, UserContextProvider,
    ]}>
      <App />
    </ComposeContext>
  </BrowserRouter>,
  document.getElementById('root')
);
