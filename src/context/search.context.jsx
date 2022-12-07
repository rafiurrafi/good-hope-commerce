import { createContext, useReducer } from "react";

const initialValue = {
  searchQuery: "",
  searchResult: [],
  isLoading: false,
  showAuto: false,
};
export const SEARCH_ACTIONS = {
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
export const SearchContext = createContext({
  searchQuery: "",
  searchResult: [],
  isLoading: false,
  showAuto: false,
});
const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialValue);
  const { searchQuery, searchResult, isLoading, showAuto } = state;
  const value = { searchQuery, searchResult, isLoading, showAuto, dispatch };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
