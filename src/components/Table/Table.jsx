import React from 'react';
import Row from '../Row/Row';
import './Table.css';

function Table(props) {
  return (
    <div className='table-container'>
      <div className='table-header'>
        <h3 className='table-header-item table-header-category'>Category</h3>
        <h3 className='table-header-item table-header-year'>Year</h3>
        <h3 className='table-header-item table-header-fullname'>Full Name</h3>
      </div>

      {props.data.map((row, i) => {
        return (
          <Row
            key={i}
            fullname={row.fullname}
            category={row.category}
            year={row.year}
          />
        );
      })}
    </div>
  );
}

export default Table;
