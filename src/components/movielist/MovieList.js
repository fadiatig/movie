import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../movieCard/MovieCard";
import "./movielist.css";
import AddMovie from "../addmovie/AddMovie";
import Logo from "../Logo";

const MovieList = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div>
      <div>
        <Logo />
      </div>
      <div className="MovieList">
        {movies.map((el) => (
          <MovieCard movie={el} />
        ))}
        <AddMovie />
      </div>
    </div>
  );
};

export default MovieList;
