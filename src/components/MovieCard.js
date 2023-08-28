import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, image_api }) => {
  const navigate = useNavigate("");

  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)} className="movie-card">
      <img src={`${image_api}/${movie.poster_path}`} width={200} alt="" />

      <h3>{movie.title}</h3>

      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
