import { useContext } from "react";
import Container from "../../componentns/common/Container/container.component";
import ProductCard from "../../componentns/product-card/product-card.component";
import { SearchContext } from "../../context/search.context";
import "./search-page.style.scss";
const SearchPage = () => {
  const { searchResult, searchQuery } = useContext(SearchContext);
  console.log(searchResult);
  return (
    <div className="search-page">
      <Container>
        {" "}
        <h1>
          Search Result for <span style={{ color: "red" }}>{searchQuery}</span>
        </h1>
        <div className="search__products">
          {searchResult.map((result) => (
            <ProductCard key={result.id} product={result} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SearchPage;
