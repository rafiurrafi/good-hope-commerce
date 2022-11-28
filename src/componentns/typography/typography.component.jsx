import { Link } from "react-router-dom";

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
export function ButtonLink({ children, to = "/" }) {
  return <Link to={`${to}`}>{children}</Link>;
}

export default Typograhpy;
