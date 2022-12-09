import "./specific-shop.style.scss";
import { useContext } from "react";
import Container from "../../componentns/common/Container/container.component";
import { SimpleCheckbox } from "../../componentns/common/input/input.component";
import Title from "../../componentns/title/title.component";
import { H4 } from "../../componentns/typography/typography.component";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../componentns/product-card/product-card.component";
import Pagination from "../../componentns/common/pagination/pagination.component";
import { useState } from "react";
import { paginate } from "../../utils/utils";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const SpecificShop = () => {
  //
  const { cat } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products/category/" + cat)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .finally(() => setIsLoading(false));
  }, [cat]);
  return (
    <div className="shop">
      <Title title="Shop" route="Home - Shop Page" />
      <Container>
        <div className="shop__filter">
          <div className="shop__filter-cat">
            <H4>Filter by Category</H4>
            <div></div>
          </div>
          <div className="shop__filter-cat">
            <H4>Filter by Price</H4>
            <div>
              <SimpleCheckbox>$0 - $100</SimpleCheckbox>
              <SimpleCheckbox>$0 - $100</SimpleCheckbox>
              <SimpleCheckbox>$0 - $100</SimpleCheckbox>
              <SimpleCheckbox>$0 - $100</SimpleCheckbox>
              <SimpleCheckbox>$0 - $100</SimpleCheckbox>
            </div>
          </div>
          <div className="shop__filter-cat">
            <H4>Filter by Price</H4>
            <div>
              <SimpleCheckbox>$0 - $100</SimpleCheckbox>
              <SimpleCheckbox>$0 - $100</SimpleCheckbox>
              <SimpleCheckbox>$0 - $100</SimpleCheckbox>
              <SimpleCheckbox>$0 - $100</SimpleCheckbox>
              <SimpleCheckbox>$0 - $100</SimpleCheckbox>
            </div>
          </div>
        </div>
        <div className="shop__items">
          {isLoading ? (
            <h1>Loading</h1>
          ) : (
            <>
              <div className="shop__items-container">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default SpecificShop;
