import React from 'react';
import { cn } from '@bem-react/classname';
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {

	const cnButton = cn('button');

	const clickHandle = () => {
		props.clickHandle();
	};

	return (
		<button className={props.type ? cnButton({'type': props.type}) : cnButton()} onClick={clickHandle}>{props.title}</button>
	);
}

Button.propTypes = {
	clickHandle: PropTypes.func,
	type: PropTypes.string,
	title: PropTypes.string
};

export default Button;
