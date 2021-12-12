import styled from 'styled-components';
import { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '../components/Box';
import Button from '../components/Button';
import Input from '../components/Input';
import InputsWrapper from '../components/InputsWrapper';

import { userLoginFormReducer, userLoginFormReducerActions } from '../reducers/user';

import AuthContext from '../store/auth-context';

const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: var(--margin-top-section);
`;

const Login = () => {
  const formInitialState = {
    isValid: false,
    fields: {
      username: {
        type: 'text',
        label: 'Username',
        value: '',
        validation: [{
            rule: 'required',
            msg: 'Please, type an username'
          },
        ],
        valid: false,
        touched: false,
      },
      password: {
        type: 'password',
        label: 'Password',
        value: '',
        validation: [{
          rule: 'required',
          msg: 'Please, type a password'
        }],
        valid: false,
        errorMsg: '',
        touched: false,
      },
    },
  };
  const [formState, dispatch] = useReducer(userLoginFormReducer, formInitialState);
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const inputArray = [];

  for(const key in formState.fields) {
    inputArray.push({
      name: key,
      ...formState.fields[key]
    });
  }

  const inputChangeHandler = event => {
    dispatch({
      type: userLoginFormReducerActions.USER_INPUT,
      field: event.target.name,
      value: event.target.value,
    });
  };

  const inputBlurHandler = event => {
    dispatch({
      type: userLoginFormReducerActions.BLUR_INPUT,
      field: event.target.name,
    });
  };

  const inputFocusHandler = event => {
    dispatch({
      type: userLoginFormReducerActions.FOCUS_INPUT,
      field: event.target.name,
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    
    if(!formState.isValid) {
      return;
    }

    const login = {};

    for(const key in formState.fields) {
      login[key] = formState.fields[key].value;
    }

    ctx.loginHandler(login);
  };

  return (
    <form onSubmit={submitHandler}>
      <StyledLogin>
        <Box title="Welcome to StoreApp">
          <InputsWrapper>
            {inputArray.map(input => (
              <Input
                key={input.name}
                name={input.name}
                label={input.label}
                type={input.type}
                value={input.value}
                touched={input.touched}
                valid={input.valid}
                invalidMessage={input.errorMsg}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                onFocus={inputFocusHandler} />
            ))}
          </InputsWrapper>
          <Button
            variant="primary"
            disabled={!formState.isValid}>Login</Button>
          <Button
            variant="secondary" onClick={() => navigate('/create-account')}>Create an account</Button>
        </Box>
      </StyledLogin>
    </form>
  );
}

export default Login;
