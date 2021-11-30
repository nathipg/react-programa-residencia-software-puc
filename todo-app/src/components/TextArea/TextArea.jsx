import './TextArea.css';

const TextArea = ({name, placeholder, value, changeHandler, readOnly}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="TextArea"
      value={value}
      onChange={changeHandler}
      readOnly={readOnly} />
  );
};

export default TextArea;