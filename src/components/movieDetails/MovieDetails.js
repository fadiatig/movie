import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./movieDetails.css";
import Rate from "../Rate/Rate";
import Logo from "../Logo";

const MovieDetails = () => {
  const movies = useSelector((state) => state.movies);
  const params = useParams();
  const navigate = useNavigate();
  let film = movies.find((el) => el.id === +params.id);
  console.log(film);
  return (
    <div>
      <Logo />

      <div style={{ backgroundColor: "black" }}>
        <h1>{film.name}</h1>
        <iframe
          width="977"
          height="544"
          src={film.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3> {film.description} </h3>
        <Rate rate={film.rating} />
        <button className="goBack" onClick={() => navigate(-2)}>Go Back</button>
      </div>
    </div>
  );
};

export default MovieDetails;
