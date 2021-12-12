import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Box from '../components/Box';
import Button from '../components/Button';
import Input from '../components/Input';
import InputsWrapper from '../components/InputsWrapper';

const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: var(--margin-top-section);
`;

const Login = () => {
  const navigate = useNavigate();

  return (
    <StyledLogin>
      <Box title="Welcome to StoreApp">
        <InputsWrapper>
          <Input
            label="Username"
            name="username"
            type="text"
            value=""
            onChange={() => {}} />
          <Input
            label="Password"
            name="password"
            type="password"
            value=""
            onChange={() => {}} />
        </InputsWrapper>
        <Button
          variant="primary">Login</Button>
        <Button
          variant="secondary" onClick={() => navigate('/create-account')}>Create an account</Button>
      </Box>
    </StyledLogin>
  );
}

export default Login;
