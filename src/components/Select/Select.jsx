import React from 'react';
import './Select.css';
function Select(props) {
  return (
    <select
      className='select-container'
      name={props.name}
      onChange={props.handleFilterChange}
    >
      <option value='all'>All</option>
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
