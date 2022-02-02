import styled from 'styled-components';

const Picture = styled.img`
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : 'auto'};
`;

export default Picture;
