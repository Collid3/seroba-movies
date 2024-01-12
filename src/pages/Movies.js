import "../styles/movies.css";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const { movies, API_IMG, search } = useContext(DataContext);

  return (
    <div className="movies-container">
      {movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      ).length > 0 ? (
        <ul className="movies">
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  image_api={API_IMG}
                  search={search}
                />
              );
            })}
        </ul>
      ) : (
        <p>Search for "{search}" not found</p>
      )}
    </div>
  );
};

export default Movies;
