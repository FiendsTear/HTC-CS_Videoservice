import React from 'react';
import { cn } from "@bem-react/classname";
import "./Genre.css";

function Genre(props) {
  const cnGenre = cn("genre");
  const cnGenreEmoji = cn(cnGenre(), "emoji");

  return (
    <div className={cnGenre()} style={{"background": `linear-gradient(136.27deg, ${props.firstColor} 8.44%, ${props.secondColor} 91.36%)`}}>
      <span className={cnGenreEmoji()} role="img" aria-label="fire">{props.emoji}</span>
      <span>{props.name}</span>
    </div>
  );
}

export default Genre;
