import styled from 'styled-components';

const StyledBox = styled.div`
  border: 3px solid black;
  padding: 1rem 3rem 3rem 3rem;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 1.5rem;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const Box = ({ children, title }) => {
  return (
    <StyledBox>
      <Title>{title}</Title>
      {children}
    </StyledBox>
  );
}

export default Box;