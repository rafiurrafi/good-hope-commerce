import { useState } from "react";

const Filter = ({ title = "", data = [], onFilter = () => false }) => {
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
      <h4 className="mb-3">{title}</h4>
      {data.map(({ id, name, value }) => (
        <div key={id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={id}
            onChange={() => handleChange(value)}
          />
          <label className="form-check-label" htmlFor={id}>
            {name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
