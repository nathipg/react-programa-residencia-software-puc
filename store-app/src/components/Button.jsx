import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: var(--border-radius);
  cursor: pointer;
  margin: 0.5rem 0;
  text-transform: uppercase;
  white-space: nowrap;
  padding: ${({ size }) => size === 'sm' ? '' : '1rem 2rem'};

  ${({ variant }) => variant === 'primary' && css`
    background-color: var(--primary);
    border: none;
    color: white;

    &:hover {
      background-color: var(--dark-primary);
    }
  `}

  ${({ variant }) => variant === 'secondary' && css`
    background-color: white;
    border: 2px solid var(--primary);
    color: var(--primary);

    &:hover {
      background-color: var(--light-primary);
    }
  `}

  ${({ disabled }) => disabled && css`
    cursor: auto;
    background-color: var(--light-primary);

    &:hover {
      background-color: var(--light-primary);
    }
  `}
`;

export default Button;