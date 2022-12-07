import "./pagination.style.scss";
import _ from "lodash";
const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          className={`pagination__btn ${page === currentPage ? "active" : ""}`}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
