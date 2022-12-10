import { useState } from "react";
import { priceFilterService } from "./filterService";
const Filter = ({ onFilter }) => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const handleChange = (name) => {
    const filters = [...categoryFilter];
    if (!filters.includes(name)) filters.push(name);
    else filters.splice(filters.indexOf(name), 1);
    onFilter(filters);
    setCategoryFilter(filters);
  };
  return (
    <div className="filter my-4">
      <h4 className="mb-3">Category</h4>
      {priceFilterService.map(({ id, name, value }) => (
        <div key={id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={name}
            onChange={() => handleChange(value)}
          />
          <label className="form-check-label" htmlFor={name}>
            {name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
