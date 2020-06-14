import React from 'react';
import Poster from './Poster';
import { cn } from '@bem-react/classname';
import './Movie.css';
import PropTypes from 'prop-types';

function Movie(props) {
	const cnMovie = cn('movie');

	return (
		<article className={cnMovie()}>
			<Poster posterName={props.posterName} posterDescription={props.description}></Poster>
			<h6>{props.name}</h6>
		</article>
	);
}

Movie.propTypes = {
	posterName: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string
};

export default Movie;
