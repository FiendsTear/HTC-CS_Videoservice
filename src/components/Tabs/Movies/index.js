import React from 'react';
import Movie from '../../Movie';
import movies_list_data from '../../../data/movies.json';
import './Movies.css';
import { cn } from '@bem-react/classname';

function MoviesList() {
	const cnMovies = cn('movies');
	const cnMoviesList = cn(cnMovies(), 'list');
	const cnMoviesIcon = cn(cnMovies(), 'icon');
	const cnMoviesItem = cn(cnMovies(), 'item');
	const cnMoviesNew = cn(cnMovies(), 'new');
	
	const firstMovie = movies_list_data.movies_list[0];
	let firstMovieLi = 
		<li className={cnMoviesItem()} key={firstMovie.id}>
			<div className={cnMoviesNew()}><img className={cnMoviesIcon()} src="/assets/icons/flame.png" alt="flame"/><h5>Новинки</h5></div>
			<Movie name={firstMovie.name} description={firstMovie.description} posterName={firstMovie.posterName}></Movie>
		</li>;

	let movies = movies_list_data.movies_list.map((movie) => 
		<li className={cnMoviesItem()} key={movie.id}><Movie name={movie.name} description={movie.description} posterName={movie.posterName}></Movie></li> 
	);
	movies.shift();
	movies.unshift(firstMovieLi);

	return (    
		<div className={cnMovies()}>			
			<ul className={cnMoviesList()}>
				{movies}
			</ul>
		</div>
	);
}

export default MoviesList;