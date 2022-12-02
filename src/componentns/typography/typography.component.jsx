import { Link } from "react-router-dom";
import "./typography.style.scss";
const Typograhpy = () => {
  return <div></div>;
};
export const H1 = ({ children, color = "white", style }) => {
  return (
    <h1 className="heading-primary" style={{ color, ...style }}>
      {children}
    </h1>
  );
};
export function H4({ children }) {
  return <h4 className="heading-tetra">{children}</h4>;
}
export function SubHeading({ children, color = "white" }) {
  <span className="sub-heading" style={{ color }}>
    {children}
  </span>;
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
export function ButtonIcon({ icon }) {
  return (
    <button className="btn-icon">
      <span>{icon}</span>
    </button>
  );
}
export default Typograhpy;
