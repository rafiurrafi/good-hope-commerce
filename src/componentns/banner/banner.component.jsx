import {
  ButtonLink,
  SmallText,
  SubHeading,
} from "../typography/typography.component";
import Container from "../common/Container/container.component";
import "./banner.style.scss";
import bannerFull from "./img/banner-full.jpg";
const BannerFull = () => {
  return (
    <div
      className="banner-full"
      style={{ backgroundImage: `url(${bannerFull})` }}
    >
      <div className="banner-full__content">
        <Container>
          <SubHeading>Full Design</SubHeading>
          <ButtonLink>Shop now</ButtonLink>
        </Container>
      </div>
    </div>
  );
};

export default BannerFull;
