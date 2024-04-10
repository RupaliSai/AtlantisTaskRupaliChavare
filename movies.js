import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://www.omdbapi.com/?apikey=[your_api_key]&s=movie"
        );
        setMovies(response.data.Search);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <p>{movie.Type}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;