import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  
  useEffect(() => {
    fetchData('dolphin'); // Fetch default data when component mounts
  }, []);

    async function fetchData() {
      try {
        const apiKey = 'HRbOXtR7h5M2WfwUJgjYayuSSgSN9jt5';
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${apiKey}&limit=3`);
        const data = await response.json();
        setGifs(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    const handleSearchSubmit = searchTerm => {
        fetchData(searchTerm);

    }
  return (
    <div>
      <GifSearch onSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
