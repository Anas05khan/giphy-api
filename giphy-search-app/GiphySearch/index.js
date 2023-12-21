import React, { useState, useEffect } from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

const apiKey = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65'; // Replace with your API key

const GiphySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async () => {
    const giphy = new GiphyFetch(apiKey);
    const response = await giphy.search(searchTerm, {
      limit: 25, // Number of gifs to fetch
    });
    setGifs(response.data);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchGifs();
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for GIFs"
      />
      <button onClick={fetchGifs}>Search</button>
      <Grid gifs={gifs} />
    </div>
  );
};

export default GiphySearch;