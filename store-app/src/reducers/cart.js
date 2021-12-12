const changeItemQtyActions = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
  REMOVE: 'remove',
};

const changeItemQty = (cartState, product, action) => {
  const itemIndex = cartState.items.findIndex(item => item.id === product.id);
  const item = itemIndex !== -1 ? cartState.items[itemIndex] : null;
  let updatedItem;
  let newTotal;

  switch(action) {
    case changeItemQtyActions.INCREASE:
      if(itemIndex === -1) {
        updatedItem = {
          ...product,
          orderItem: {
            qty: 1,
            price: product.price,
          },
        };
      } else {
        const item = cartState.items[itemIndex];
        updatedItem = {
          ...item,
          orderItem: {
            qty: item.orderItem.qty + 1,
            price: item.orderItem.price + product.price,
          },
        };
      }
      newTotal = cartState.total + product.price;
      break;
    case changeItemQtyActions.DECREASE:
      updatedItem = {
        ...item,
        orderItem: {
          qty: item.orderItem.qty - 1,
          price: item.orderItem.price - product.price,
        },
      };
      newTotal = cartState.total - product.price;
      break;
    case changeItemQtyActions.REMOVE:
      newTotal = cartState.total - item.orderItem.price;
      break;
    default:
      throw new Error('Invalid action');
  }

  let updatedItems = cartState.items.filter((item, i) => i !== itemIndex);

  if(action !== changeItemQtyActions.REMOVE) {
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

  const updatedState = {
    ...cartState,
    items: updatedItems,
    total: newTotal,
  };

  return updatedState;
};

const addHandler = (prevState, action) => {
  const { product } = action;
  return changeItemQty(prevState, product, changeItemQtyActions.INCREASE);
};

const changeQtyHandler = (prevState, action) => {
  const { newValue, product } = action;
  const itemIndex = prevState.items.findIndex(item => item.id === product.id);
  const item = prevState.items[itemIndex];
  
  if(newValue === '0') {
    return changeItemQty(prevState, product, changeItemQtyActions.REMOVE);
  } else if(+newValue > item.orderItem.qty) {
    return changeItemQty(prevState, product, changeItemQtyActions.INCREASE);
  } else {
    return changeItemQty(prevState, product, changeItemQtyActions.DECREASE);
  }
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