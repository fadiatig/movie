import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../JS/Actions/MovieActions";
import Logo from "../Logo";
import "./search.css";
import MovieList from "../movielist/MovieList";
const Search = () => {
  const movies = useSelector((state) => state.movies);
  const [myinput, setMyinput] = useState("");
  const dispatch = useDispatch();
  const movieslist = () => {
    if (myinput) {
      dispatch(search({ name: myinput }));
    } else {
      return <MovieList />;
    }
  };

  return (
    <div>
      <Logo />
      <input
        className="inputsearch"
        type="text"
        placeholder="Search film by title"
        onChange={(e) => setMyinput(e.target.value)}
        value={myinput}
      />
      <Link to="/movielist">
        <button className="searchBtn" onClick={movieslist}>
          Search
        </button>
      </Link>
    </div>
  );
};

export default Search;
