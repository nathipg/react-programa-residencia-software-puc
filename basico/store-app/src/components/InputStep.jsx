import styled from 'styled-components';

import Input from './Input';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Action = styled.span`
  color: var(--primary);
  font-weight: 700;
  font-size: 2rem;
  cursor: pointer;
`;

const InputStep = ({ name, value, changeHandler }) => {
  return (
    <Wrapper>
      <Action onClick={() => changeHandler(value - 1)}>-</Action>
      <Input
        name={name}
        type="text"
        value={value}
        size="sm"
        onChange={event => changeHandler(event.target.value.replace(/[^0-9]+/, ''))} />
      <Action onClick={() => changeHandler(value + 1)}>+</Action>
    </Wrapper>
  );
};

export default InputStep;
