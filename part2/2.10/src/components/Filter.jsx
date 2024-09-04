import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    onFilterChange(newFilter);  
  };

  return (
    <div>
      <label>
        Filter shown with:
        <input 
          type="text" 
          value={filter} 
          onChange={handleFilterChange} 
          className="border p-2 ml-2"
        />
      </label>
    </div>
  );
};

export default Filter;
