import "./testimonial.style.scss";
const Testimonial = ({ testimonial: { name, position, comment, image } }) => {
  return (
    <div className="testimonial">
      <div className="testimonial__img">
        <img src={image} alt="" />
      </div>
      <div className="testimonial__content">
        <div className="testimonial__header">
          <h3 className="testimonial__name">{name}</h3>
          <p className="testimonial__position">{position}</p>
        </div>
        <p className="testimonial__comment">{comment}</p>
      </div>
    </div>
  );
};

export default Testimonial;
