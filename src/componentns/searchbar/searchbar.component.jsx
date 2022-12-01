import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../common/loading/loading.component";
import { ButtonLink } from "../typography/typography.component";
import "./searchbar.style.scss";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [showAuto, setShowAuto] = useState(false);
  console.log(searchResult.length);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }
  function handleChange(e) {
    const { value } = e.target;
    setSearchQuery(value);
    if (searchQuery.length > 2) {
      setShowAuto(true);
      setIsLoading(true);
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((res) => res.json())
        .then(({ products }) => {
          setSearchResult(products);
          setIsLoading(false);
        });
    } else setShowAuto(false);
  }
  function renderData() {
    if (searchResult.length > 0)
      return (
        <div>
          <h3>Product</h3>
          {searchResult
            .filter((_, id) => id < 3)
            .map(({ id, title }) => (
              <Link className="auto-link" to={`/products/${id}`} key={id}>
                {title}
              </Link>
            ))}
          <ButtonLink>Get All Result</ButtonLink>
        </div>
      );
    else return <h3>No result found</h3>;
  }
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search anything"
          onChange={handleChange}
          name="searchQuery"
          value={searchQuery}
        />
        <button>
          <FaSearch />
        </button>
      </form>
      {showAuto && (
        <div className="search-box__auto">
          {isLoading ? (
            <div className="search-loading">
              <Loading />
            </div>
          ) : (
            renderData()
          )}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
