const addHandler = (prevState, action) => {
  return [
    ...prevState,
    action.order,
  ];
};

const loadHandler = (prevState, action) => {
  return [ ...action.orders ];
};

export const orderReducer = (prevState, action) => {
  switch (action.type) {
    case orderReducerActions.ADD:
      return addHandler(prevState, action);
    case orderReducerActions.LOAD:
      return loadHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const orderReducerActions = {
  ADD: 'ADD',
  LOAD: 'LOAD',
};
