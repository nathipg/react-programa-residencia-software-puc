const changeItemQty = (cartState, data) => {
  const { newValue, product } = data;
  const itemIndex = cartState.items.findIndex(item => item.id === product.id);
  const newQty = +newValue > 100 ? 100 : +newValue;

  const updatedItem = {
    ...product,
    orderItem: {
      qty: newQty,
      price: product.price * newQty,
    },
  };

  let updatedItems = cartState.items.filter((item, i) => i !== itemIndex);

  if(newQty > 0) {
    let secondHalf = [];
    
    if(itemIndex !== -1 && updatedItems.length > itemIndex) {
      secondHalf = updatedItems.splice(itemIndex);
    }

    updatedItems = [
      ...updatedItems,
      updatedItem,
      ...secondHalf
    ];
  }

  const newTotal = updatedItems.reduce((prevValue, item) => prevValue + item.orderItem.price, 0);

  return {
    ...cartState,
    items: updatedItems,
    total: newTotal,
  };
};

const addHandler = (prevState, action) => {
  const item = prevState.items.find(item => item.id === action.product.id);
  let newValue = 1;

  if(item) {
    newValue = item.orderItem.qty + 1;
  }

  return changeItemQty(prevState, {
    ...action,
    newValue,
  });
};

const changeQtyHandler = (prevState, action) => {
  return changeItemQty(prevState, action);
};

const resetHandler = (prevState, action) => {
  return action.cart;
};

export const cartReducer = (prevState, action) => {
  switch (action.type) {
    case cartReducerActions.ADD:
      return addHandler(prevState, action);
    case cartReducerActions.CHANGE_QTY:
      return changeQtyHandler(prevState, action);
    case cartReducerActions.RESET:
      return resetHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const cartReducerActions = {
  ADD: 'ADD',
  CHANGE_QTY: 'CHANGE_QTY',
  RESET: 'RESET',
};
