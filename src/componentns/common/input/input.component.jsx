import "./input.style.scss";
const InputWithButton = ({
  placeholder = "",
  type = "text",
  className = "",
  buttonText = "",
}) => {
  return (
    <div className={`input-button ${className}`}>
      <input type={type} placeholder={placeholder} />
      <button>{buttonText}</button>
    </div>
  );
};

export default InputWithButton;
