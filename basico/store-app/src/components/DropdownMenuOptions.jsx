import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropdownMenuOptions = styled(Link)`
  width: 14rem;
  margin: 0;
  padding: 0.75rem;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: var(--light-gray);
    color: var(--primary);
  }
`;

export default DropdownMenuOptions;
