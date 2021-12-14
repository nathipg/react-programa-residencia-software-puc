import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CartContext from './cart';
import FlashMsgContext from './flashMsg';

const AuthContext = createContext({
  isLoggedIn: false,
  loggedUser: null,
  logoutHandler: () => {},
  loginHandler: login => {}
});

export const AuthContextProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const flashMsgCtx = useContext(FlashMsgContext);
    const cartCtx = useContext(CartContext);

    const logoutHandler = () => {
      setLoggedUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem('loggedToken');
      cartCtx.resetHandler();
      navigate('/login');
    };

    const loginHandler = async login => {
      try {
        const response = await axios.post('http://localhost:3001/login', login);

        if(response.status !== 200) {
          throw Error(response);
        }
    
        setLoggedUser(response.data);
        setIsLoggedIn(true);
    
        navigate('/');
      } catch(e) {
        console.error(e);
        flashMsgCtx.showHandler('Invalid credentials');
      }
    };

    useEffect(() => {
      const token = localStorage.getItem('loggedToken');

      if(token) {
        (async () => {
          try {
            const response = await axios.post('http://localhost:3001/token', {
              token,
            });
    
            if(response.status !== 200) {
              return;
            }
    
            setLoggedUser(response.data);
            setIsLoggedIn(true);
          } catch(e) {
            localStorage.removeItem('loggedToken');
          }
        })();
      }
    }, []);

    useEffect(() => {
      if(loggedUser) {
        localStorage.setItem('loggedToken', loggedUser.token);
        return;
      }
    }, [loggedUser]);

    return (
      <AuthContext.Provider value={{ isLoggedIn, loggedUser, logoutHandler, loginHandler }}>
        {children}
      </AuthContext.Provider>
    )
}

export default AuthContext;
