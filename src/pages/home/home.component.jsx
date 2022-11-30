import { useContext } from "react";
import BannerFull from "../../componentns/banner/banner.component";
import Container from "../../componentns/common/Container/container.component";
import ProductCard from "../../componentns/product-card/product-card.component";
import ProductTimer from "../../componentns/product-timer/product-timer.component";
import SingleFashion from "../../componentns/single-fashion/single-fashion.component";
import Hero from "../../componentns/sliderr/hero.component";
import { ProductContext } from "../../context/product.context";
import "./home.style.scss";
const Home = () => {
  const { products, isLoading } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      {/* <Hero /> */}
      {/* <Container></Container> */}
      <section className="section-home-collection">
        <Container>
          <div className="home-collections">
            <SingleFashion />
            <SingleFashion type="right" />
          </div>
          <ProductTimer />
        </Container>
      </section>
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

      <BannerFull />
    </div>
  );
};

export default Home;
