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
export function SubHeading({ children, color }) {
  <span className="sub-heading" style={{ color }}>
    {children}
  </span>;
}
export function ButtonLink({ children, to = "/" }) {
  return <Link to={`${to}`}>{children}</Link>;
}
export function HeadingLink({ children, to }) {
  return (
    <Link to={`${to}`} className="heading-link">
      {children}
    </Link>
  );
}
export function SmallText({ children, style = {} }) {
  <p className="small-text" style={{ ...style }}>
    {children}
  </p>;
}
export default Typograhpy;
