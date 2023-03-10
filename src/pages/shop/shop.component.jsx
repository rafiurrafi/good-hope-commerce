import { useContext } from "react";
import Container from "../../componentns/common/Container/container.component";
import { SimpleCheckbox } from "../../componentns/common/input/input.component";
import Title from "../../componentns/title/title.component";
import { H4 } from "../../componentns/typography/typography.component";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../componentns/product-card/product-card.component";
import "./shop.style.scss";
import Pagination from "../../componentns/common/pagination/pagination.component";
import { useState } from "react";
import { paginate } from "../../utils/utils";
import { useEffect } from "react";
import Filter from "../../componentns/common/filter/filter.component";
import {
  priceFilterService,
  ratingFilterService,
} from "../../utils/filterService";

const pageSize = 9;

const Shop = () => {
  const { products, isLoading } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [brand, setBrand] = useState("");

  function handlePageChange(page) {
    setCurrentPage(page);
  }
  const handlePriceFilter = (filter) => {
    setPriceFilter(filter);
    setCurrentPage(1);
  };
  const handleRatingFilter = (filter) => {
    setRatingFilter(filter);
    setCurrentPage(1);
  };
  const handleBrand = (brand) => {
    setBrand(brand);
    setCurrentPage(1);
  };

  const filterByPrice = priceFilter.length
    ? products.filter((product) =>
        priceFilter.some(
          (price) => product.price < price && product.price > price - 299
        )
      )
    : products;
  const filterByBrand = brand
    ? filterByPrice.filter((product) => product.brand === brand)
    : filterByPrice;

  const filterByRating = ratingFilter.length
    ? filterByBrand.filter((product) =>
        ratingFilter.some(
          (rating) => product.rating < rating && product.rating > rating - 1
        )
      )
    : filterByBrand;

  const paginatedProducts = paginate(filterByRating, currentPage, pageSize);
  return (
    <>
      <Title title="Shop" route="Home - Shop Page" />
      <div className="shop">
        <Container>
          <div className="shop__filter">
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
            <div className="shop__filter-cat">
              <div>
                <h4 style={{ marginBottom: "2rem" }}>Search Using Cat</h4>
                <select
                  name=""
                  id=""
                  value={brand}
                  onChange={(e) => handleBrand(e.target.value)}
                >
                  <option value="">Select Brand</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.brand}>
                      {product.brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="shop__items">
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              <>
                <h2>
                  You have <span>{paginatedProducts.length}</span> products
                </h2>
                <div className="shop__items-container">
                  {paginatedProducts.length ? (
                    paginatedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  ) : (
                    <h1>Boss you have no product to show</h1>
                  )}
                </div>
                <Pagination
                  itemsCount={filterByRating.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Shop;
