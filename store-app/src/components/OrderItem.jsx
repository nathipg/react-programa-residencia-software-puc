import styled from 'styled-components';

import Input from './Input';
import Picture from './Picture';

const Item = styled.tr`
  td {
    padding: 1rem;
    text-align: center;
    white-space: nowrap;
  }
`;

const OrderItem = ({ item, edit, changeQtyHandler }) => {
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
            type="number"
            value={item.orderItem.qty}
            size="sm"
            onChange={event => changeQtyHandler(event, item)} />
        }
        {!edit && item.orderItem.qty}
      </td>
      <td>$ {item.price.toFixed(2)}</td>
      <td>$ {item.orderItem.price.toFixed(2)}</td>
    </Item>
  );
}

export default OrderItem;
