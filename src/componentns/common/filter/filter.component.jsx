import { useState } from "react";
import "./filter.style.scss";
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
      <h4 style={{ marginBottom: "3rem" }}>{title}</h4>
      {data.map(({ id, name, value }) => (
        <div class="form-group" key={id}>
          <input type="checkbox" id={id} onChange={() => handleChange(value)} />
          <label htmlFor={id}>{name}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
