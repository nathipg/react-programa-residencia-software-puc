import { useContext } from 'react';
import styled from 'styled-components';

import Input from './Input';
import Picture from './Picture';

import CartContext from '../store/contexts/cart';

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
          <Input
            name="qty"
            type="text"
            value={item.orderItem.qty}
            size="sm"
            onChange={event => cartCtx.changeQtyHandler(event.target.value, item)} />
        }
        {!edit && item.orderItem.qty}
      </td>
      <td>$ {Number(item.price).toFixed(2)}</td>
      <td>$ {Number(item.orderItem.price).toFixed(2)}</td>
    </Item>
  );
}

export default OrderItem;
