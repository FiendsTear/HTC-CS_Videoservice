import React from 'react';
import Movie from '../../Movie';
import movies_list_data from '../../../data/movies.json';
import './Movies.css';
import { cn } from '@bem-react/classname';

function MoviesList() {
	const cnMovies = cn('movies');
	const cnMoviesList = cn(cnMovies(), 'list');

	return (    
		<div className={cnMovies()}>
			<div><span role="img" aria-label="fire">🔥</span><h5>Новинки</h5></div>
			<ul className={cnMoviesList()}>
				{movies_list_data.movies_list.map((movie) => 
					<li key={movie.id}><Movie name={movie.name} description={movie.description} posterName={movie.posterName}></Movie></li> 
				)}
			</ul>
		</div>
	);
}

export default MoviesList;