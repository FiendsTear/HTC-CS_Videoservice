import React from 'react';
import Poster from "./Poster";
import { cn } from "@bem-react/classname";
import "./Movie.css";

function Movie(props) {
  const cnMovie = cn("movie");

  return (
    <article className={cnMovie()}>
      <Poster posterName={props.posterName} posterDescription={props.description}></Poster>
      <span>{props.name}</span>
    </article>
  );
}

export default Movie;
