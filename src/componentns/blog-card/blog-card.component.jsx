import { ButtonLink } from "../typography/typography.component";
import "./blog-card.style.scss";
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-card__img"></div>
      <div className="blog-card__content">
        <h3 className="blog-card__title"></h3>
        <div className="blog-card__meta"></div>
        <div className="blog-card__text"></div>
        <ButtonLink to="/">Read more</ButtonLink>
      </div>
    </div>
  );
};

export default BlogCard;
