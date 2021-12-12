import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  isLoggedIn: false,
  loggedUser: null,
  logoutHandler: () => {},
  loginHandler: login => {}
});

export const AuthContextProvider = (props) => {
    const [loggedUser, setLoggedUser] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const logoutHandler = () => {
      setLoggedUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem('loggedToken');
      navigate('/login');
    };

    const loginHandler = async login => {
      const response = await axios.post('http://localhost:3001/login', login);

      if(response.status !== 200) {
        // Tratar erro
        return;
      }
  
      setLoggedUser(response.data);
      setIsLoggedIn(true);
  
      navigate('/');
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
        {props.children}
      </AuthContext.Provider>
    )
}

export default AuthContext;
