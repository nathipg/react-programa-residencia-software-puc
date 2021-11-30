import './Input.css';

const Input = ({type, name, placeholder, value, changeHandler, valid, errorMessage, readOnly}) => {
  const error = !valid ? (
    <span className="error">{errorMessage}</span>
  ) : null;

  return (
    <div className="Input">
      <input
        type={type} 
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        readOnly={readOnly} />
      {error}
    </div>
  );
};

export default Input;