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
  name = "",
  value = "",
  required = false,
  onChange = () => null,
}) {
  return (
    <div className={`input-label ${className}`}>
      <label htmlFor="">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required ={required}
        placeholder={placeholder}
      />
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
export function SimpleTextarea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={5}
      className="simple-textarea"
    ></textarea>
  );
}

export default InputWithButton;
