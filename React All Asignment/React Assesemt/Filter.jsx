import React, { useState } from 'react';

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const fruits = ['Banana', 'Apple', 'Orange', 'Mango', 'Pineapple', 'Watermelon'];

  const filteredItems = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2>Build Search Filter in React</h2>

      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </>
  );
};

export default Filter;
