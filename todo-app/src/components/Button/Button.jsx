import './Button.css';

const Button = ({children, type, variant, clickHandler}) => {
  variant = !variant ? 'primary' : variant;

  return (
    <button 
      type={type}
      className={`Button ${variant}`}
      onClick={clickHandler}>{children}</button>
  );
};

export default Button;