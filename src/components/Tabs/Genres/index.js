import React from 'react';
import Genre from '../../Genre';
import genres_list_data from '../../../data/genres.json';
import './Genres.css';
import { cn } from '@bem-react/classname';

function Genres() {
	const cnGenres = cn('genres');
	const cnGenresList = cn(cnGenres(), 'list');
	const cnGenresItem = cn(cnGenres(), 'item');

	return (    
		<div className={cnGenres()}>
			<h5>Жанры</h5>
			<ul className={cnGenresList()}>
				{genres_list_data.genres_list.map((genre) => 
					<li className={cnGenresItem()} key={genre.id}><Genre name={genre.name} firstColor={genre.firstColor} secondColor={genre.secondColor} icon={genre.icon}></Genre></li> 
				)}
			</ul>
		</div>
	);
}

export default Genres;