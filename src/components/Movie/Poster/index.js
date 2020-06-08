import React from 'react';
import { cn } from "@bem-react/classname";
import "./Poster.css";
import Curtain from "../../Curtain";

function Poster(props) {
  const cnPoster = cn("poster");
  const cnPosterDescription = cn(cnPoster(), "description");
  const cnPosterPicture = cn(cnPoster(), "picture");

  return (
    <figure className={cnPoster()}>
      <Curtain covering='poster'></Curtain>
      <img className={cnPosterPicture()} src={"/assets/posters/" + props.posterName} alt="new_batman"/>
      <figcaption className={cnPosterDescription()}>{props.posterDescription}</figcaption>
    </figure>
  );
}

export default Poster;
