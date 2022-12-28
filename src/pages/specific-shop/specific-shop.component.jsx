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

import Filter from "../../componentns/common/filter/filter.component";
import {
  priceFilterService,
  ratingFilterService,
} from "../../utils/filterService";
const SpecificShop = () => {
  //
  const { cat } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [priceFilter, setPriceFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [brand, setBrand] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products/category/" + cat)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .finally(() => setIsLoading(false));
  }, [cat]);

  const handlePriceFilter = (filter) => {
    setPriceFilter(filter);
  };
  const handleRatingFilter = (filter) => {
    setRatingFilter(filter);
  };

  const filterByPrice = priceFilter.length
    ? products.filter((product) =>
        priceFilter.some(
          (price) => product.price < price && product.price > price - 299
        )
      )
    : products;
  const filterByRating = ratingFilter.length
    ? filterByPrice.filter((product) =>
        ratingFilter.some(
          (rating) => product.rating < rating && product.rating > rating - 1
        )
      )
    : filterByPrice;

  return (
    <>
      <Title title="Shop" route="Home - Shop Page" />
      <div className="shop">
        <Container>
          <div className="shop__filter">
            <div className="shop__filter-cat">
              <div></div>
            </div>
            <div className="shop__filter-cat">
              <Filter
                onFilter={handlePriceFilter}
                data={priceFilterService}
                title="Filter By Category"
              />
            </div>
            <div className="shop__filter-cat">
              <div>
                <Filter
                  onFilter={handleRatingFilter}
                  data={ratingFilterService}
                  title="Filter By Ratings"
                />
              </div>
            </div>
          </div>
          <div className="shop__items">
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              <>
                <div className="shop__items-container">
                  {filterByRating.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default SpecificShop;
