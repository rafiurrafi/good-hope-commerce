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
import { priceFilterService } from "../../utils/filterService";
const pageSize = 9;
const Shop = () => {
  const { products, isLoading } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  const handlePriceFilter = (filter) => {
    setPriceFilter(filter);
  };
  const handleRatingFilter = (filter) => {
    setRatingFilter(filter);
  };

  const filteredProductsByPrice = priceFilter.length
    ? products.filter((product) =>
        priceFilter.some(
          (price) => product.price < price && product.price > price - 299
        )
      )
    : products;
  // const filteredProductsByRating = ratingFilter.length
  //   ? products.filter((product) =>
  //       ratingFilter.some(
  //         (rating) => product.rating < rating && product.rating > rating - 1
  //       )
  //     )
  //   : products;
  const paginatedProducts = paginate(
    filteredProductsByPrice,
    currentPage,
    pageSize
  );

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
            <Filter onFilter={handlePriceFilter} data={priceFilterService} />
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
                {paginatedProducts.length ? (
                  paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <h1>Boss you have no product to show</h1>
                )}
              </div>
              <Pagination
                itemsCount={filteredProductsByPrice?.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Shop;
