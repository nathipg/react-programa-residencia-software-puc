import { useReducer } from 'react';
import styled from 'styled-components';

import Box from '../components/Box';
import Button from '../components/Button';
import Input from '../components/Input';
import InputsWrapper from '../components/InputsWrapper';

import { userFormReducer, userFormReducerActions } from '../reducers/user';

const StyledCreateAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: var(--margin-top-section);
`;

const CreateAccount = ({ users, addUserHandler }) => {
  const formInitialState = {
    isValid: false,
    fields: {
      name: {
        type: 'text',
        label: 'Name',
        value: '',
        validation: [{
          rule: 'required',
          msg: 'Please, type a name'
        }],
        valid: false,
        errorMsg: '',
        touched: false,
      },
      email: {
        type: 'email',
        label: 'Email',
        value: '',
        validation: [{
            rule: 'required',
            msg: 'Please, type an email'
          }, {
            rule: 'email',
            msg: 'Please, type a valid email'
          }
        ],
        valid: false,
        errorMsg: '',
        touched: false,
      },
      username: {
        type: 'text',
        label: 'Username',
        value: '',
        validation: [{
            rule: 'required',
            msg: 'Please, type an username'
          }, {
            rule: 'available_username',
            msg: 'Sorry, this username is not available'
          }
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
  const [formState, dispatch] = useReducer(userFormReducer, formInitialState);
  const inputArray = [];

  for(const key in formState.fields) {
    inputArray.push({
      name: key,
      ...formState.fields[key]
    });
  }

  const inputChangeHandler = event => {
    dispatch({
      type: userFormReducerActions.USER_INPUT,
      field: event.target.name,
      value: event.target.value,
    });
  };

  const inputBlurHandler = event => {
    dispatch({
      type: userFormReducerActions.BLUR_INPUT,
      field: event.target.name,
      payload: users,
    });
  };

  const inputFocusHandler = event => {
    dispatch({
      type: userFormReducerActions.FOCUS_INPUT,
      field: event.target.name,
    });
  };

  const submitHandler = event => {
    event.preventDefault();

    if(!formState.isValid) {
      return;
    }

    const user = {
      admin: 0,
    };

    for(const key in formState.fields) {
      user[key] = formState.fields[key].value;
    }

    addUserHandler(user);
  };

  return (
    <StyledCreateAccount>
      <form onSubmit={submitHandler}>
        <Box title="Create an account">
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
            disabled={!formState.isValid}>Sign up</Button>
        </Box>
      </form>
    </StyledCreateAccount>
  );
}

export default CreateAccount;
