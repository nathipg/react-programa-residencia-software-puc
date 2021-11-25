import './Input.css';

const Input = ({type, name, placeholder, value, changeHandler, valid, errorMessage}) => {
  const titleError = !valid ? (
    <span className="error">{errorMessage}</span>
  ) : null;

  return (
    <div className="Input">
      <input
        type={type} 
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler} />
      {titleError}
    </div>
  );
};

export default Input;