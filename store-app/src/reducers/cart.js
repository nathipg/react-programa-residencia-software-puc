const changeItemQtyActions = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
  REMOVE: 'remove',
};

const changeItemQty = (cartState, product, action) => {
  const itemIndex = cartState.items.findIndex(item => item.product.id === product.id);
  const item = itemIndex !== -1 ? cartState.items[itemIndex] : null;
  let updatedItem;
  let newTotal;

  switch(action) {
    case changeItemQtyActions.INCREASE:
      if(itemIndex === -1) {
        updatedItem = {
          product: product,
          qty: 1,
          price: product.price,
        };
      } else {
        const item = cartState.items[itemIndex];
        updatedItem = {
          ...item,
          qty: item.qty + 1,
          price: item.price + product.price,
        };
      }
      newTotal = cartState.total + product.price;
      break;
    case changeItemQtyActions.DECREASE:
      updatedItem = {
        ...item,
        qty: item.qty - 1,
        price: item.price - product.price,
      };
      newTotal = cartState.total - product.price;
      break;
    case changeItemQtyActions.REMOVE:
      newTotal = cartState.total - item.price;
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
  const itemIndex = prevState.items.findIndex(item => item.product.id === product.id);
  const item = prevState.items[itemIndex];
  
  if(newValue === '0') {
    return changeItemQty(prevState, product, changeItemQtyActions.REMOVE);
  } else if(+newValue > item.qty) {
    return changeItemQty(prevState, product, changeItemQtyActions.INCREASE);
  } else {
    return changeItemQty(prevState, product, changeItemQtyActions.DECREASE);
  }
};

export const cartReducer = (prevState, action) => {
  switch (action.type) {
    case cartReducerActions.ADD:
      return addHandler(prevState, action);
    case cartReducerActions.CHANGE_QTY:
      return changeQtyHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const cartReducerActions = {
  ADD: 'ADD',
  CHANGE_QTY: 'CHANGE_QTY',
};
