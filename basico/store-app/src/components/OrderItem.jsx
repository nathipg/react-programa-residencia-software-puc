import { useContext } from 'react';
import styled from 'styled-components';

import Picture from './Picture';

import CartContext from '../store/contexts/cart';
import InputStep from './InputStep';

const Item = styled.tr`
  td {
    padding: 1rem;
    text-align: center;
    white-space: nowrap;
  }
`;

const OrderItem = ({ item, edit }) => {
  const cartCtx = useContext(CartContext);

  return (
    <Item>
      <td>
        <Picture src={item.picture} width="9rem" />
      </td>
      <td>{item.name}</td>
      <td>
        {
          edit && 
          <InputStep
            name="qty"
            value={item.orderItem.qty}
            changeHandler={value => cartCtx.changeQtyHandler(value, item)} />
        }
        {!edit && item.orderItem.qty}
      </td>
      <td>$ {Number(item.price).toFixed(2)}</td>
      <td>$ {Number(item.orderItem.price).toFixed(2)}</td>
    </Item>
  );
}

export default OrderItem;
