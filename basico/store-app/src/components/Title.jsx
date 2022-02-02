import styled, { css } from 'styled-components';

const StyledTitle = styled.h1`
  margin: 0 auto;
  color: ${({ color }) => color ? color : 'inherit'};

  ${({ level }) => level === '1' && css`
    font-size: 1.5rem;
    font-family: sans-serif;
  `}

  ${({ level }) => level === '2' && css`
    font-size: 1rem;
    font-weight: normal;
    text-transform: uppercase;
  `}
`;

const Title = ({ children, level, color }) => {
  level = level ? level : '1';
  const tag = `h${level}`;
  return (
    <StyledTitle 
      as={tag}
      color={color}
      level={level}>
      {children}
    </StyledTitle>
  );
};

export default Title;