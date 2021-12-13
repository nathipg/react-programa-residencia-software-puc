import styled from 'styled-components';

import Title from './Title';

const Wrapper = styled.div`
  padding: var(--margin-top-section) var(--margin-horizontal);
`;

const ContentWrapper = styled.div`
  padding-top: 1rem;
`;

const SectionWrapper = ({ children, title }) => {
  return (
    <Wrapper>
      { title && <Title>{title}</Title> }
      <ContentWrapper>
        { children }
      </ContentWrapper>
    </Wrapper>
  );
};

export default SectionWrapper;
