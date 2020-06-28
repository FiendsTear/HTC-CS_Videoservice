import React from 'react';
import { cn } from '@bem-react/classname';
import './Genre.css';
import PropTypes from 'prop-types';

function Genre(props) {
	const cnGenre = cn('genre');
	const cnGenreIcon = cn(cnGenre(), 'icon');

	return (
		<div className={cnGenre()} style={{'background': `linear-gradient(136.27deg, ${props.firstColor} 8.44%, ${props.secondColor} 91.36%)`}}>
			<img className={cnGenreIcon()} src={props.icon} role="img" alt={props.name}/>
			<h6>{props.name}</h6>
		</div>
	);
}

Genre.propTypes = {
	firstColor: PropTypes.string,
	secondColor: PropTypes.string,
	icon: PropTypes.string,
	name: PropTypes.string
};

export default Genre;
