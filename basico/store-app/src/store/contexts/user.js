import axios from 'axios';
import { createContext, useCallback, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { userReducer, userReducerActions } from '../reducers/user';

import FlashMsgContext from './flashMsg';

const UserContext = createContext({
  users: [],
  addHandler: user => {},
  loadUsers: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [users, dispatchUsers] = useReducer(userReducer, []);
  const flashMsgCtx = useContext(FlashMsgContext);
  const navigate = useNavigate();

  const addHandler = async user => {
    try {
      const response = await axios.post('http://localhost:3001/user', user);
      
      if(response.status !== 200) {
        throw Error(response);
      }

      dispatchUsers({
        type: userReducerActions.ADD,
        user: response.data,
      });

      navigate('/login');
    } catch(e) {
      console.error(e);
      flashMsgCtx.showHandler('Error creating user');
    }
  };

  const loadUsers = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/user');

    if(response.status !== 200) {
      throw Error('Could not load users');
    }

    dispatchUsers({
      type: userReducerActions.LOAD,
      users: response.data,
    });
  }, [dispatchUsers]);  

  return (
    <UserContext.Provider value={{ users, addHandler, loadUsers }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserContext;
