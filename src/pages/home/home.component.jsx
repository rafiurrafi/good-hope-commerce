import Container from "../../componentns/common/Container/container.component";
import SingleFashion from "../../componentns/single-fashion/single-fashion.component";
import Hero from "../../componentns/sliderr/hero.component";
import "./home.style.scss";
const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      {/* <Container></Container> */}
      <SingleFashion type="right" />
    </div>
  );
};

export default Home;
