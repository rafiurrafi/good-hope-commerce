import "./title.style.scss";
import img from "./carousel-1.jpg";
const Title = ({ title = "", route = "", image = img }) => {
  // const backgroundImage = `linear-gradient(
  //   to right,
  //   rgba(0, 0, 0, 0.7),
  //   rgba(0, 0, 0, 0.9)
  // ) url(${image})`;
  return (
    <div
      className="title"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h3>{title}</h3>
      <p>{route}</p>
    </div>
  );
};

export default Title;
