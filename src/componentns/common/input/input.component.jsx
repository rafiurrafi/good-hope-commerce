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
export function InputWithLabel({
  label,
  className,
  placeholder,
  type = "text",
}) {
  return (
    <div className={`input-label ${className}`}>
      <label htmlFor="">{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
export function SimpleCheckbox({ children }) {
  return (
    <div className="simple-checkbox">
      <input type="checkbox" id={children} />
      <label htmlFor={children}>{children}</label>
    </div>
  );
}

export default InputWithButton;
