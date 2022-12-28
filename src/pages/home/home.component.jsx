import { useContext } from "react";
import Slider from "react-slick";
import BannerFull from "../../componentns/banner/banner.component";
import BlogCard from "../../componentns/blog-card/blog-card.component";
import Container from "../../componentns/common/Container/container.component";
import IconCard from "../../componentns/common/loading/icon-card/icon-card.component";
import ProductCard from "../../componentns/product-card/product-card.component";
import ProductTimer from "../../componentns/product-timer/product-timer.component";
import SingleFashion from "../../componentns/single-fashion/single-fashion.component";
import Hero from "../../componentns/sliderr/hero.component";
import Testimonial from "../../componentns/testimonial/testimonial.component";
import { BigHeading } from "../../componentns/typography/typography.component";
import { ProductContext } from "../../context/product.context";
import { featuresData, testimonialData } from "../../utils/data";
import coverImage from "./cover-1.jpeg";
import "./home.style.scss";
import fashionBoyImg from "./img/fashion-boy.jpg";
import fashionGirlImg from "./img/women.png";
const Home = () => {
  const { products, isLoading } = useContext(ProductContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
  };
  return (
    <div>
      <Hero />
      <section className="section-home-collection">
        <BigHeading
          color="black"
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          Why you choose <span>Us</span>
        </BigHeading>
        <Container>
          <div className="home-collections">
            <SingleFashion image={fashionBoyImg} />
            <SingleFashion
              image={fashionGirlImg}
              type="right"
              collection="women"
            />
          </div>
          <ProductTimer />
        </Container>
      </section>
      <section style={{ margin: "6rem 0" }}>
        <BigHeading
          color="black"
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          Our <span>Latest</span> Collection
        </BigHeading>
        <Container>
          <div className="product-cards-home">
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              products
                ?.filter((_, id) => id < 4)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
            )}
          </div>
        </Container>
      </section>
      <BannerFull />
      <div className="home-icons">
        {featuresData.map(({ id, icon, title }) => (
          <IconCard key={id} icon={icon} text={title} />
        ))}
      </div>
      <section
        className="home-testimonial"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75)), url(${coverImage})`,
        }}
      >
        <div>
          <Slider {...settings}>
            {testimonialData.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </section>
      <section style={{ margin: "6rem 0" }}>
        <BigHeading
          color="black"
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          You will <span>Like</span> this
        </BigHeading>
        <Container>
          <div className="product-cards-home">
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              products
                ?.filter((_, id) => id > 4 && id < 9)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
            )}
          </div>
        </Container>
      </section>
      {/* <section className="home-blog">
        <BlogCard />
      </section> */}
    </div>
  );
};

export default Home;
