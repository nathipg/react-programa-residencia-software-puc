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

const OrdersItemsListItem = ({ item, edit, changeQtyHandler }) => {
  return (
    <Item>
      <td>
        <Picture src={item.product.picture} width="9rem" />
      </td>
      <td>{item.product.name}</td>
      <td>
        {
          edit && 
          <Input
            name="qty"
            type="number"
            value={item.qty}
            size="sm"
            onChange={event => changeQtyHandler(event, item.product)} />
        }
        {!edit && item.qty}
      </td>
      <td>$ {item.product.price.toFixed(2)}</td>
      <td>$ {item.price.toFixed(2)}</td>
    </Item>
  );
}

export default OrdersItemsListItem;
