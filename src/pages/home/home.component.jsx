import Container from "../../componentns/common/Container/container.component";
import ProductCard from "../../componentns/product-card/product-card.component";
import ProductTimer from "../../componentns/product-timer/product-timer.component";
import SingleFashion from "../../componentns/single-fashion/single-fashion.component";
import Hero from "../../componentns/sliderr/hero.component";
import "./home.style.scss";
const Home = () => {
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
      <ProductCard />
    </div>
  );
};

export default Home;
