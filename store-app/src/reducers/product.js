import { changeInputHandler, blurInputHandler, focusInputHandler } from '../util/utility';

export const productFormReducer = (prevState, action) => {
  switch (action.type) {
    case productFormReducerActions.USER_INPUT:
      return changeInputHandler(prevState, action);
    case productFormReducerActions.BLUR_INPUT:
      return blurInputHandler(prevState, action);
    case productFormReducerActions.FOCUS_INPUT:
      return focusInputHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const productFormReducerActions = {
  USER_INPUT: 'USER_INPUT',
  BLUR_INPUT: 'BLUR_INPUT',
  FOCUS_INPUT: 'FOCUS_INPUT',
};

const addHandler = (prevState, action) => {
  return [
    ...prevState,
    action.product,
  ];
};

const loadHandler = (prevState, action) => {
  return [ ...action.products ];
};

export const productReducer = (prevState, action) => {
  switch (action.type) {
    case productReducerActions.ADD:
      return addHandler(prevState, action);
    case productReducerActions.LOAD:
      return loadHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const productReducerActions = {
  ADD: 'ADD',
  LOAD: 'LOAD',
};
