import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  ${({ size }) => size === 'sm' && css`
    width: fit-content;
    margin: 0 0.5rem;
  `}

  textarea {
    min-height: 150px;
    padding: 1rem;
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
  outline: 0;
  resize: none;
  border-radius: var(--border-radius);
  font-size: 1.2rem;
  transition: border-color .3s;
  height: 3.5rem;
  padding: 0 1rem;
  width: stretch;


  ${({ size }) => size === 'sm' && css`
    height: 2.5rem;
    padding: 0 0.5rem;
    width: 3rem;
  `}

  &:focus + span {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValue }) => hasValue && css`
    & + span {
      transform: scale(.6) translateY(-10px);
    }
  `}

  ${({ valid, touched }) => !valid && touched && css`
    border-color: var(--error);
  `}
`;

const InvalidMessage = styled.span`
  color: var(--error);
  font-size: 0.8rem;
`;

const Input = ({
  as, label, type, name, value, onChange, onBlur, onFocus, valid, invalidMessage, touched, size
}) => {
  const fieldId = `id_${name}`;
  const hasValue = !!value.length;
  const hasLabel = !!label;

  valid = valid === undefined ? true : valid;

  const input = <StyledInput
    id={fieldId}
    as={as}
    type={type}
    name={name}
    value={value}
    hasValue={hasValue}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    valid={valid}
    size={size} />;

  return (
    <Wrapper size={size}>
      {
        hasLabel && (
          <Label
            htmlFor={fieldId}>
            {input}
            <Label.Text>
              {label}
            </Label.Text>
          </Label>
        )
      }
      { !hasLabel && input }
      {
        touched &&
        !valid && 
        invalidMessage &&
        <InvalidMessage>{invalidMessage}</InvalidMessage>
      }
    </Wrapper>
  );
}

export default Input;