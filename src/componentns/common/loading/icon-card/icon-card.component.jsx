import "./icon-card.style.scss";
const IconCard = ({ icon, text }) => {
  return (
    <div className="icon-card">
      <img src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default IconCard;
