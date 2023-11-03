import React, { useState } from 'react';

function GifSearch({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          placeholder="Enter search term"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default GifSearch;
