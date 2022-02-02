import styled from 'styled-components';

const Button = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: aliceblue;
  color: rgba(66, 66, 176, 1);
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(66, 66, 176, 1);
    color: aliceblue;
  }
`;

export default Button;