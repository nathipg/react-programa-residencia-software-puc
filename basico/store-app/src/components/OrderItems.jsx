import styled from 'styled-components';

import OrderItem from './OrderItem';

const TableWrapper = styled.div`
  overflow-x: auto;
  width: stretch;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: stretch;

  thead {
    th {
      font-weight: normal;
      text-transform: uppercase;
    }
  }

  tbody {
    tr {
      background-color: white;
    }
  }

  tr {
    border-bottom: 1px solid var(--gray);
  }
`;

const OrderItems = ({ items, edit }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <OrderItem 
              key={item.id} 
              item={item} 
              edit={edit} />
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

export default OrderItems;
