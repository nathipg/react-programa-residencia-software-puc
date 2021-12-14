const changeItemQty = (cartState, data) => {
  const { newValue, product } = data;
  const itemIndex = cartState.items.findIndex(item => item.id === product.id);
  const updatedItem = {
    ...product,
    orderItem: {
      qty: newValue,
      price: product.price * newValue,
    },
  };

  let updatedItems = cartState.items.filter((item, i) => i !== itemIndex);

  if(+newValue > 0) {
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
  return changeItemQty(prevState, {
    ...action,
    newValue: 1
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
