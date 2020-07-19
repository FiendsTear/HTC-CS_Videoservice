import React from 'react';
import Genre from '../../Genre';
import genres_list_data from '../../../data/genres.json';
import './Genres.css';
import { cn } from '@bem-react/classname';

function Genres() {
	const cnGenres = cn('genres');
	const cnGenresList = cn(cnGenres(), 'list');
	const cnGenresItem = cn(cnGenres(), 'item');
	const cnGenresHeader = cn(cnGenres(), 'header');

	const firstGenre= genres_list_data.genres_list[0];
	const firstGenreLi = 
		<li className={cnGenresItem()} key={firstGenre.id}>
			<h5 className={cnGenresHeader()}>Жанры</h5>
			<Genre name={firstGenre.name} firstColor={firstGenre.firstColor} secondColor={firstGenre.secondColor} icon={firstGenre.icon}></Genre>
		</li>;

	let genres = genres_list_data.genres_list.map((genre) => 
		<li className={cnGenresItem()} key={genre.id}><Genre name={genre.name} firstColor={genre.firstColor} secondColor={genre.secondColor} icon={genre.icon}></Genre></li> 
	);
	genres.shift();
	genres.unshift(firstGenreLi);

	return (    
		<div className={cnGenres()}>
			<ul className={cnGenresList()}>
				{genres}
			</ul>
		</div>
	);
}

export default Genres;