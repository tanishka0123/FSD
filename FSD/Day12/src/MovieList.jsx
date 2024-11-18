import React from "react";
import movies from "./movies";
import "./App.css"

function MovieList() {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.image} />
          <h2> Title: {movie.title}</h2>
          <h2>Language: {movie.language}</h2>
          <h2>Cost: {movie.cost}</h2>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
