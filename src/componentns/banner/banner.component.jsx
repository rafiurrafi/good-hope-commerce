import {
  ButtonLink,
  H1,
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
          <SubHeading color="black">Full Design</SubHeading>
          <H1 color="black" style={{ fontWeight: 400 }}>
            MEN&amp;s FASHION DESTINATION
          </H1>
          <p className="banner-full__discount">15% Discount</p>
          <ButtonLink>Shop now</ButtonLink>
        </Container>
      </div>
    </div>
  );
};

export default BannerFull;
