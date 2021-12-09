import styled from 'styled-components';

const Item = styled.tr`
  td {
    padding: 1rem;
    text-align: center;
  }
`;

const Picture = styled.img`
  min-width: 9rem;
  max-width: 9rem;
`;

const OrdersItemsListItem = ({ item }) => {
  return (
    <Item>
      <td>
        <Picture src={item.product.picture} />
      </td>
      <td>{item.product.name}</td>
      <td>{item.qty}</td>
      <td>$ {item.product.price}</td>
      <td>$ {item.total}</td>
    </Item>
  );
}

export default OrdersItemsListItem;
