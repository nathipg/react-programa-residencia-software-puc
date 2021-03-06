import styled, { css } from 'styled-components';

import Title from './Title';

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  ${({ variant }) => (!variant || variant === 'primary') && css`
    border-radius: var(--border-radius);
    border: 3px solid black;
    padding: 1rem 3rem 3rem 3rem;
  `}

  ${({ variant }) => variant === 'secondary' && css`
    border: 1px solid var(--gray);
    padding: 1rem;
  `}
`;

const TitleWrapper = styled.div`
  margin-bottom: 3rem;
`;

const Box = ({ children, title, variant }) => {
  return (
    <StyledBox variant={variant}>
      {
        title && (
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
        )
      }
      {children}
    </StyledBox>
  );
}

export default Box;