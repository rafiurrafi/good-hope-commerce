import { Link } from "react-router-dom";
import "./typography.style.scss";
const Typograhpy = () => {
  return <div></div>;
};
export function BigHeading({ children, color = "white", style }) {
  return (
    <h1 className="big-heading" style={{ color, ...style }}>
      {children}
    </h1>
  );
}
export const H1 = ({ children, color = "white", style }) => {
  return (
    <h1 className="heading-primary" style={{ color, ...style }}>
      {children}
    </h1>
  );
};
export function H4({ children, color = "" }) {
  return (
    <h4 className="heading-tetra" style={{ color }}>
      {children}
    </h4>
  );
}
export function SubHeading({ children, color = "white", style = {} }) {
  return (
    <span className="sub-heading" style={{ color, ...style }}>
      {children}
    </span>
  );
}
export function ButtonLink({ children, to = "/", size = "" }) {
  return (
    <Link
      to={`${to}`}
      className={`btn-link ${size === "small" ? "btn-link--sm" : ""}`}
    >
      {children}
    </Link>
  );
}
export function HeadingLink({ children, to }) {
  return (
    <Link to={`${to}`} className="heading-link">
      {children}
    </Link>
  );
}
export function SmallText({ children, style = {} }) {
  return (
    <p className="small-text" style={{ ...style }}>
      {children}
    </p>
  );
}
export function ButtonIcon({ icon, color = "white" }) {
  return (
    <button
      className="btn-icon"
      style={{ color, border: `1px solid ${color}` }}
    >
      <span>{icon}</span>
    </button>
  );
}
export function Button({ children, type, disabled = false }) {
  //block, small large medium
  return (
    <button disabled={disabled} className={` btn ${type}`}>
      {children}
    </button>
  );
}
export default Typograhpy;
