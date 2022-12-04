import "./title.style.scss";
import img from "./carousel-1.jpg";
const Title = ({ title = "", route = "", image }) => {
  return (
    <div className="title" style={{ backgroundImage: `url(${img})` }}>
      <h3>{title}</h3>
      <p>{route}</p>
    </div>
  );
};

export default Title;
