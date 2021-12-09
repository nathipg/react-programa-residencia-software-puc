import styled from 'styled-components';

import Box from '../components/Box';
import Button from '../components/Button';
import Input from '../components/Input';

const StyledCreateAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: var(--margin-top-section);
`;

const CreateAccount = () => {
  return (
    <StyledCreateAccount>
      <Box title="Create an account">
        <Input
          label="Name"
          name="name"
          type="text"
          value=""
          onChange={() => {}} />
        <Input
          label="Email"
          name="email"
          type="email"
          value=""
          onChange={() => {}} />
        <Input
          label="User"
          name="user"
          type="text"
          value=""
          onChange={() => {}}
          touched={false}
          invalid={true}
          invalidMessage="User not available" />
        <Input
          label="Password"
          name="password"
          type="password"
          value=""
          onChange={() => {}} />
        <Button
          variant="primary">Sign up</Button>
      </Box>
    </StyledCreateAccount>
  );
}

export default CreateAccount;
