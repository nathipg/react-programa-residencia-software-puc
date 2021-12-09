import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 0.5rem;
`;

const Icon = styled.div`
  align-items: center;
  border: 2px solid white;
  border-radius: 100%;
  color: white;
  display: flex;
  height: 2.25rem;
  justify-content: center;
  width: 2.25rem;
`;

const UserIcon = ({ name }) => {
  return (
    <Wrapper>
      <Icon>{name[0]}</Icon>
    </Wrapper>
  );
}

export default UserIcon;
