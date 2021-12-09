import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import CreateAccount from './containers/CreateAccount';
import Login from './containers/Login';
import Products from './containers/Products';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
