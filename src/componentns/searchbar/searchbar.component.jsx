import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.style.scss";
const Searchbar = () => {
  const [focus, setFocus] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }
  function handleFocus() {
    setFocus(!focus);
  }
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search anything"
          onFocus={handleFocus}
        />
        <button>
          <FaSearch />
        </button>
      </form>
      {focus && <div className="search-box__auto"></div>}
    </div>
  );
};

export default Searchbar;
