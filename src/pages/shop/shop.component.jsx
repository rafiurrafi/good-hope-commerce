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
const pageSize = 9;
const Shop = () => {
  const { products, isLoading } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  //  filters : [100, 200, 400]
  //  products : [
  //   {id : 1, price : 100}
  //   {id : 1, price : 200}
  //   {id : 1, price : 300}
  //   {id : 1, price : 400}
  //  ]
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  const paginatedProducts = paginate(products, currentPage, pageSize);
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
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <Pagination
                itemsCount={products?.length}
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
