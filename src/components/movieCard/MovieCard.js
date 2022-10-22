import React from "react";
import "./moviecard.css";
import Rate from "../Rate/Rate";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import EditMovie from "../editmovie/EditMovie";

const MovieCard = ({ movie }) => {
  return (
    <div className="film" style={{ width: "10%" }}>
      <img src={movie.image} alt="movieImage" />
      <div className="name">
        {" "}
        <span>{movie.name}</span>
      </div>

      <div className="rating">
        <Rate rate={movie.rating} />
      </div>
      <Link to={`/movielist/${movie.id}`}>
        <FontAwesomeIcon icon={faYoutube} className="watch" />
      </Link>
      <EditMovie el={movie} />
    </div>
  );
};

export default MovieCard;
