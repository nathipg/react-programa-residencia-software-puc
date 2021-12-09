import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;

  textarea {
    min-height: 150px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  height: 3.5rem;
  position: absolute;
  top: 0;
  left: 1rem;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  transform-origin: 0% 0%;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  display: block;
  height: 3.5rem;
  outline: 0;
  padding: 0 1rem;
  resize: none;
  border-radius: var(--border-radius);
  font-size: 1.2rem;
  width: stretch;

  transition: border-color .3s;

  &:focus + span {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValue }) => hasValue && css`
    & + span {
      transform: scale(.6) translateY(-10px);
    }
  `}

  ${({ invalid, touched }) => invalid && touched && css`
    border-color: var(--error);
  `}
`;

const InvalidMessage = styled.span`
  color: var(--error);
  font-size: 0.8rem;
`;

const Input = ({
  as, label, type, name, value, onChange, invalid, invalidMessage, touched
}) => {
  const fieldId = `id_${name}`;
  const hasValue = Boolean(value.length);

  return (
    <Wrapper>
      <Label
        htmlFor={fieldId}
      >
        <StyledInput
          id={fieldId}
          as={as}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
          invalid={invalid}
        />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
      {
        touched &&
        invalid && 
        invalidMessage &&
        <InvalidMessage>{invalidMessage}</InvalidMessage>
      }
    </Wrapper>
  );
}

export default Input;