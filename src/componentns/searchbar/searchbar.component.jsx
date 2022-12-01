import { useReducer, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../common/loading/loading.component";
import { ButtonLink } from "../typography/typography.component";
import "./searchbar.style.scss";
const initialValue = {
  searchQuery: "",
  searchResult: [],
  isLoading: false,
  showAuto: false,
};
const SEARCH_ACTIONS = {
  IS_LOADING: "IS_LOADING",
  IS_FETCHING: "IS_FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  TOGGLE_SHOW_AUTO: "TOOGLE_SHOW_AUTO",
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
};
function searchReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ACTIONS.IS_LOADING:
      return { ...state, isLoading: payload };
    case SEARCH_ACTIONS.IS_FETCHING:
      return { ...state, isLoading: true, showAuto: true };
    case SEARCH_ACTIONS.FETCH_SUCCESS:
      return { ...state, isLoading: false, searchResult: payload };
    case SEARCH_ACTIONS.TOGGLE_SHOW_AUTO:
      return { ...state, showAuto: payload };
    case SEARCH_ACTIONS.SET_SEARCH_QUERY:
      return { ...state, searchQuery: payload };

    default:
      throw new Error(`Unhandled action type ${type}`);
  }
}

const Searchbar = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  // const [isLoading, setIsLoading] = useState();
  // const [showAuto, setShowAuto] = useState(false);
  const [state, dispatch] = useReducer(searchReducer, initialValue);
  const { searchQuery, searchResult, isLoading, showAuto } = state;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }
  console.log(state);
  function handleChange(e) {
    const { value } = e.target;
    dispatch({ type: SEARCH_ACTIONS.SET_SEARCH_QUERY, payload: value });
    if (searchQuery.length > 2) {
      dispatch({ type: SEARCH_ACTIONS.IS_FETCHING });
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((res) => res.json())
        .then(({ products }) => {
          dispatch({ type: SEARCH_ACTIONS.FETCH_SUCCESS, payload: products });
        });
    } else dispatch({ type: SEARCH_ACTIONS.TOGGLE_SHOW_AUTO, payload: false });
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
