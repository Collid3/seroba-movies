import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../API/api";
import DataContext from "../context/DataContext";

const MoviePage = () => {
  const [movie, setMovie] = useState(null);

  const { API_IMG } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const response = await api.get(
        `/movie/${id}?api_key=489e0dbd05e04e6f942dcc5be09579a8`
      );
      setMovie(response.data);
    };

    getMovie();
  }, []);

  if (!movie) return;

  return (
    <div className="movie-page-container">
      <img
        className="background-image"
        src={`${API_IMG}/${movie.backdrop_path}`}
        alt=""
      />

      <div className="movie-page">
        <div className="movie-details-container">
          <div className="image-container">
            <img src={`${API_IMG}/${movie.poster_path}`} alt="" width={200} />
          </div>

          <div className="movie-details">
            <h1>{movie.title}</h1>

            <section>
              <p>Release Date: {movie.release_date}</p>

              <p>Runtime: {movie.runtime} minutes</p>
            </section>

            <section className="genres">
              <h3>Genres</h3>

              <span>{movie.genres.map((genre) => genre.name + ", ")}</span>
            </section>

            <p className="movie-tagline">{movie.tagline}</p>

            <section className="overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </section>

            <section className="made-in">
              <h5>Made in: </h5>
              {movie.production_countries.map((country, index) => (
                <p key={index}>{country.name}</p>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
