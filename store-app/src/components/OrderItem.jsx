import styled from 'styled-components';

import Input from './Input';
import Picture from './Picture';

const Item = styled.tr`
  td {
    padding: 1rem;
    text-align: center;
  }
`;

const OrdersItemsListItem = ({ item, edit }) => {
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
            onChange={() => {}} />
        }
        {!edit && item.qty}
      </td>
      <td>$ {item.product.price}</td>
      <td>$ {item.total}</td>
    </Item>
  );
}

export default OrdersItemsListItem;
