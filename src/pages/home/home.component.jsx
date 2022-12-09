import { useState } from "react";
import { useContext } from "react";
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
import "./home.style.scss";
const Home = () => {
  const { products, isLoading } = useContext(ProductContext);
  return (
    <div>
      <Hero />
      {/* <Container></Container> */}
      <section className="section-home-collection">
        <BigHeading
          color="black"
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          Why you choose <span>Us</span>
        </BigHeading>
        <Container>
          <div className="home-collections">
            <SingleFashion />
            <SingleFashion type="right" />
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
      <section className="home-testimonial">
        {testimonialData.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </section>
      <section className="home-blog">
        <BlogCard />
      </section>
    </div>
  );
};

export default Home;
