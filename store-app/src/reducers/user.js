import { changeInputHandler, blurInputHandler, focusInputHandler } from '../util/utility';

export const userLoginFormReducer = (prevState, action) => {
  switch (action.type) {
    case userLoginFormReducerActions.USER_INPUT:
      return changeInputHandler(prevState, action);
    case userLoginFormReducerActions.BLUR_INPUT:
      return blurInputHandler(prevState, action);
    case userLoginFormReducerActions.FOCUS_INPUT:
      return focusInputHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const userLoginFormReducerActions = {
  USER_INPUT: 'USER_INPUT',
  BLUR_INPUT: 'BLUR_INPUT',
  FOCUS_INPUT: 'FOCUS_INPUT',
};

export const userFormReducer = (prevState, action) => {
  switch (action.type) {
    case userFormReducerActions.USER_INPUT:
      return changeInputHandler(prevState, action);
    case userFormReducerActions.BLUR_INPUT:
      return blurInputHandler(prevState, action);
    case userFormReducerActions.FOCUS_INPUT:
      return focusInputHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const userFormReducerActions = {
  USER_INPUT: 'USER_INPUT',
  BLUR_INPUT: 'BLUR_INPUT',
  FOCUS_INPUT: 'FOCUS_INPUT',
};

const addHandler = (prevState, action) => {
  return [
    ...prevState,
    action.user,
  ];
};

const loadHandler = (prevState, action) => {
  return [ ...action.users ];
};

export const userReducer = (prevState, action) => {
  switch (action.type) {
    case userReducerActions.ADD:
      return addHandler(prevState, action);
    case userReducerActions.LOAD:
      return loadHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const userReducerActions = {
  ADD: 'ADD',
  LOAD: 'LOAD',
};
